import { AuthForm } from "@/components/templates/Auth/auth"
import { Toaster } from 'react-hot-toast';

export default function Auth() {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <Toaster />
            <div className="w-full max-w-sm md:max-w-3xl">
                <AuthForm />
            </div>
        </div>
    );
}