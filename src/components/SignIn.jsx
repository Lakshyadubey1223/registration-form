import React from 'react';

const SignIn = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center rounded-xl bg-green-700 text-white p-1">Sign In</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring "
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="  px-4 py-2 rounded-xl hover:bg-green-600 focus:outline-none  bg-green-700 text-white"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                <p className="text-center text-sm mt-4">
                    Don't have an account? <a href="/signup" className="text-green-700 hover:underline font-bold">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
