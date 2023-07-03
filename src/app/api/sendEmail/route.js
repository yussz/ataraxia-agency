import { mailOptions, transporter } from "@/app/nodemailer/nodemailer";
import { NextResponse ,NextRequest} from "next/server";
  export async function POST (req) {
    try {
        const body  =await req.json()
        const formData = await body.body
     
        await transporter.sendMail({
            ...mailOptions,
            subject:"New Client",
            text:" Ataraxia Client Inquiry",
            html:`
            <strong>Full Name</strong>: <span>${formData.name}</span><br/><br/>
            <strong>Email Address</strong>: <span>${formData.email}</span><br/><br/>
            <strong>Phone Number</strong>: <span>${formData.number}</span><br/><br/>
            <strong>Company/Organization</strong>: <span>${formData.company}</span> <br/><br/>
            <strong>Service</strong>: <span>${formData.service}</span> <br/><br/>
            <strong>Description</strong>: <span>${formData.description}</span>`
        })




        return NextResponse.json({status:'okay'})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({status:'Bad Req'})
    }
}