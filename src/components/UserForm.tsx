import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { User, Mail, Phone, Lock, CheckCircle2, Loader2 } from "lucide-react"
import { motion } from "motion/react"

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type FormData = z.infer<typeof formSchema>

export function UserForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form Data:", data)
    setIsSubmitting(false)
    setIsSuccess(true)
    toast.success("Registration successful!", {
      description: "Your account has been created successfully.",
    })
    reset()
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <div className="max-w-xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="border-border/50 shadow-xl overflow-hidden">
          <div className="h-2 bg-primary" />
          <CardHeader className="space-y-1 pb-8">
            <CardTitle className="text-3xl font-bold tracking-tight">Create an Account</CardTitle>
            <CardDescription className="text-base">
              Enter your details below to join our community.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center space-y-4"
              >
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
                  <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">Success!</h3>
                <p className="text-muted-foreground">
                  Your registration was successful. We&apos;ve sent a confirmation email to your inbox.
                </p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                  Register Another User
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-semibold flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      className={`h-12 rounded-xl bg-muted/30 border-border/50 focus:ring-primary/20 ${
                        errors.fullName ? "border-destructive focus:ring-destructive/20" : ""
                      }`}
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="text-sm font-medium text-destructive mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className={`h-12 rounded-xl bg-muted/30 border-border/50 focus:ring-primary/20 ${
                        errors.email ? "border-destructive focus:ring-destructive/20" : ""
                      }`}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm font-medium text-destructive mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="text-sm font-semibold flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      Phone Number
                    </Label>
                    <Input
                      id="phoneNumber"
                      placeholder="+1 (555) 000-0000"
                      className={`h-12 rounded-xl bg-muted/30 border-border/50 focus:ring-primary/20 ${
                        errors.phoneNumber ? "border-destructive focus:ring-destructive/20" : ""
                      }`}
                      {...register("phoneNumber")}
                    />
                    {errors.phoneNumber && (
                      <p className="text-sm font-medium text-destructive mt-1">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-semibold flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className={`h-12 rounded-xl bg-muted/30 border-border/50 focus:ring-primary/20 ${
                        errors.password ? "border-destructive focus:ring-destructive/20" : ""
                      }`}
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="text-sm font-medium text-destructive mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl text-lg font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Register Now"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
