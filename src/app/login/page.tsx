'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* 返回首页 */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首页
          </Link>
        </div>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">LEAP AI</span>
          </div>
          <p className="text-gray-600">登录您的账户</p>
        </div>

        {/* 登录表单 */}
        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-900">欢迎回来</CardTitle>
            <CardDescription className="text-gray-600">
              请输入您的邮箱和密码登录
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 邮箱输入 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">邮箱地址</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="请输入您的邮箱"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* 密码输入 */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">密码</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="请输入您的密码"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* 记住我和忘记密码 */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-600">记住我</span>
              </label>
              <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                忘记密码？
              </button>
            </div>

            {/* 登录按钮 */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg font-medium">
              登录
            </Button>

            {/* 分割线 */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">或者</span>
              </div>
            </div>

            {/* 第三方登录 */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full py-3 border-gray-300">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuNDMgMTAuMDlDNC40MyA5LjMgNC42MiA4LjU2IDQuOTQgNy44NEw0Ljk0IDcuODRMMC44OSAxMC44NEgwLjg5QzAuMzIgMTIgMCA1NC4wMSAwIDEwLjA5QzAgMTYuNSA1LjUgMjAgMTAgMjBDMTUgMjAgMjAgMTUuNSAyMCAxMC4wOUMgMjAgOS4yNiAxOS45MSA4LjUgMTkuNzUgNy44MUgxMFYxMi4wNUgxNS41QzE1LjE3IDEzLjggMTQuMiAxNS4xOCAxMi44IDE2TDEyLjggMTZMMTYgMTMuNjhWMTMuNjhDMTguNSAxMS45MiAyMCA2LjUgMjAgMTAuMDlaIiBmaWxsPSIjNDI4NUY0Ii8+Cjwvc3ZnPgo=" 
                     alt="Google" className="w-5 h-5 mr-3" />
                使用 Google 登录
              </Button>
              <Button variant="outline" className="w-full py-3 border-gray-300">
                <div className="w-5 h-5 mr-3 bg-green-500 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">微</span>
                </div>
                使用微信登录
              </Button>
            </div>

            {/* 注册链接 */}
            <p className="text-center text-sm text-gray-600">
              还没有账户？{' '}
              <Link href="/register" className="text-blue-600 hover:text-blue-800 font-medium">
                立即注册
              </Link>
            </p>
          </CardContent>
        </Card>

        {/* 底部说明 */}
        <p className="text-center text-xs text-gray-500 mt-8">
          登录即表示您同意我们的{' '}
          <a href="#" className="text-blue-600 hover:underline">服务条款</a>{' '}
          和{' '}
          <a href="#" className="text-blue-600 hover:underline">隐私政策</a>
        </p>
      </div>
    </div>
  )
} 