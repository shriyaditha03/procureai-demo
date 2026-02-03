import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const DemoRequestSchema = z.object({
    fullName: z.string().min(1, "Name is required"),
    organization: z.string().min(1, "Organization is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().optional(),
    industry: z.string().min(1, "Industry is required"),
    message: z.string().default(""),
})

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const validData = DemoRequestSchema.parse(body)

        const demoRequest = await prisma.demoRequest.create({
            data: validData,
        })

        return NextResponse.json({ success: true, data: demoRequest }, { status: 201 })
    } catch (error) {
        console.error("Error creating demo request:", error)
        if (error instanceof z.ZodError) {
            return NextResponse.json({ success: false, error: error.issues }, { status: 400 })
        }
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET() {
    try {
        const requests = await prisma.demoRequest.findMany({
            orderBy: { createdAt: 'desc' },
        })
        return NextResponse.json(requests)
    } catch (error) {
        console.error("Error fetching demo requests:", error)
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
    }
}

export async function DELETE() {
    try {
        await prisma.demoRequest.deleteMany()
        return NextResponse.json({ success: true, message: "All records deleted" })
    } catch (error) {
        console.error("Error deleting demo requests:", error)
        return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
    }
}
