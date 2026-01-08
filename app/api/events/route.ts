import { NextResponse } from "next/server";
import { eventService } from "../../services/event.service";

export async function GET() {
  const data = await eventService.getEvents();
  return NextResponse.json(data);
}
