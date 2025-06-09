'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, User, Building, Globe, CheckCircle, Sparkles, TrendingUp } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function TrialPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    industry: '',
    monthlyBudget: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 处理表单提交
    console.log('表单数据:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 导航栏 */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">LEAP AI</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link href="/login/">
                <Button variant="outline" size="sm">登录</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 左侧：试用表单 */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Performance-Lite 免费试用</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                开始您的 AI 营销之旅
              </h1>
              <p className="text-xl text-gray-600">
                5分钟完成设置，立即体验AI驱动的KOC合作平台
              </p>
            </div>

            {/* 试用表单 */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">免费试用申请</CardTitle>
                <CardDescription className="text-gray-600">
                  填写基本信息，我们将在24小时内为您开通试用账户
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* 姓名 */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">姓名 *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="请输入您的姓名"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    {/* 邮箱 */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">邮箱 *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="请输入您的邮箱"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* 公司名称 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">公司名称 *</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="请输入您的公司名称"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* 网站 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">网站地址</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://your-website.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* 行业 */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">行业类别 *</label>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        required
                      >
                        <option value="">请选择行业</option>
                        <option value="fashion">时尚服装</option>
                        <option value="beauty">美妆护肤</option>
                        <option value="electronics">电子数码</option>
                        <option value="home">家居生活</option>
                        <option value="food">食品饮料</option>
                        <option value="health">健康保健</option>
                        <option value="education">教育培训</option>
                        <option value="other">其他</option>
                      </select>
                    </div>

                    {/* 月度预算 */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">月度营销预算</label>
                      <select
                        name="monthlyBudget"
                        value={formData.monthlyBudget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">请选择预算范围</option>
                        <option value="under-5k">$5,000以下</option>
                        <option value="5k-20k">$5,000 - $20,000</option>
                        <option value="20k-50k">$20,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">$100,000以上</option>
                      </select>
                    </div>
                  </div>

                  {/* 提交按钮 */}
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg font-medium">
                    立即开始免费试用
                  </Button>

                  {/* 说明文字 */}
                  <p className="text-sm text-gray-500 text-center">
                    提交后，我们的专业团队将在24小时内联系您，协助完成账户设置
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* 右侧：试用特权 */}
          <div className="space-y-8">
            {/* Performance-Lite 特权 */}
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-600 text-white">Performance-Lite</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">15%</div>
                    <div className="text-sm text-gray-600">归因 GMV</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">免费试用包含</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "无最低消费限制",
                    "15% 绩效费率",
                    "基础归因报表",
                    "邮件技术支持",
                    "AI 智能匹配系统",
                    "实时 ROAS 追踪",
                    "自动化邀约功能",
                    "30天试用期"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 成功案例预览 */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  试用客户平均表现
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">3.8×</div>
                    <div className="text-gray-600">平均 ROAS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">7天</div>
                    <div className="text-gray-600">平均上手时间</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">85%</div>
                    <div className="text-gray-600">续费转化率</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">200+</div>
                    <div className="text-gray-600">平均匹配创作者</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 联系支持 */}
            <Card className="border-0 shadow-lg bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-3">需要帮助？</h3>
                <p className="text-gray-600 mb-4">
                  我们的专业团队随时为您提供支持，助您快速上手
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>📧 support@leap-ai.com</div>
                  <div>📞 +86 400-123-4567</div>
                  <div>💬 微信客服：LeapAI2024</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 