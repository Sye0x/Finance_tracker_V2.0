import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const Register = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-80 rounded-[1.1rem] py-3 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold">
            Create Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" autoComplete="name" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="johndoe"
                autoComplete="username"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                autoComplete="email"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </div>

            <Button className="w-full" type="submit">
              Create Account
            </Button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>

              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button
                type="button"
                variant="outline"
                className="flex items-center gap-2"
              >
                <img src="/google.svg" className="h-5" />
                Sign up with Google
              </Button>

              <Button
                type="button"
                variant="outline"
                className="flex items-center gap-2"
              >
                <img src="/facebook.svg" className="h-6" alt="Facebook" />
                Sign up with Facebook
              </Button>
            </div>

            <div className="flex space-x-1 justify-center">
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?
              </p>
              <Link to="/">Login</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
