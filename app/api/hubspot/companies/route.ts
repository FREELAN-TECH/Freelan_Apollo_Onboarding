import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN || process.env.HUBSPOT_API_KEY;
  if (!token) return NextResponse.json({ error: "HubSpot no está configurado" }, { status: 503 });
  const q = new URL(request.url).searchParams.get("q")?.trim();
  if (!q) return NextResponse.json({ results: [] });
  const response = await fetch("https://api.hubapi.com/crm/v3/objects/companies/search", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ filterGroups: [{ filters: [{ propertyName: "name", operator: "CONTAINS_TOKEN", value: q }] }], properties: ["name", "domain", "industry", "numberofemployees", "annualrevenue"], limit: 10 }),
    cache: "no-store",
  });
  if (!response.ok) return NextResponse.json({ error: "HubSpot rechazó la consulta" }, { status: response.status });
  const data = await response.json();
  return NextResponse.json({ results: data.results ?? [] });
}

