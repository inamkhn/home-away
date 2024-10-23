'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { useSearchParams } from 'next/navigation'
import { confirmSignUp } from 'aws-amplify/auth'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export default function OtpPage() {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const emailParam = searchParams.get('email')
    if (emailParam) {
      setEmail(emailParam)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('otp:', otp)
    setError('')

    if (!email || otp.length !== 6) {
      setError('Please fill in all fields')
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    try {
      const response = await confirmSignUp({
        username: email,
        confirmationCode: otp,
      })
      if (response) {
        router.push('/signin')
      }
      toast('register success')
    } catch (error) {
      if (error instanceof Error) {
        console.log("error:",error)
        toast(error.message)
      } else {
        toast('An unknown error occurred')
      }
    }
  }

  return (
    <Card className='w-[500px] mx-auto mt-10'>
      <CardHeader>
        <CardTitle>OTP Verification</CardTitle>
        <CardDescription>Enter your email and the OTP you received.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='you@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='otp'>OTP</Label>
            <InputOTP maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          {error && (
            <Alert variant='destructive'>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button type='submit' className='w-full bg-yellow-300 hover:bg-yellow-500'>
            Verify
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
