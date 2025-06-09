'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp,
  Star, 
  CheckCircle, 
  Globe,
  ArrowRight,
  Users,
  Target,
  MessageSquare,
  CreditCard,
  Sparkles,
  Play,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [currentCase, setCurrentCase] = useState(0)

  // 案例自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % 3)
    }, 30000) // 30秒自动切换
    return () => clearInterval(timer)
  }, [])

  const cases = [
    {
      id: 1,
      name: "Le Petit Lunetier",
      logo: "👓",
      metrics: ["1,000+ 创作者/月", "5.8× ROAS", "覆盖 7 市场 3 语种"],
      summary: "法国眼镜品牌通过LEAP AI成功进入亚太市场，30天内建立起跨越7个国家的KOC网络，实现了传统渠道难以企及的本土化营销效果。",
      videoTime: "45s"
    },
    {
      id: 2,
      name: "Wild Deodorant",
      logo: "🌿",
      metrics: ["650+ 创作者/月", "4.1× ROAS", "成功进入美国零售"],
      summary: "英国天然护理品牌借助AI精准匹配，在美国市场快速建立品牌认知，最终成功打入Target等主流零售渠道，实现线上线下双突破。",
      videoTime: "45s"
    },
    {
      id: 3,
      name: "中国美妆 DTC",
      logo: "💄",
      metrics: ["500+ 创作者/月", "4.6× ROAS", "首月 GMV $120K"],
      summary: "某中国美妆品牌首次出海尝试，通过LEAP AI的AI智能匹配系统，仅用30天就在海外建立起完整的KOC合作网络，首月即实现盈利。",
      videoTime: "45s"
    }
  ]

  const timelineSteps = [
    {
      title: "AI 寻人",
      subtitle: "1亿+创作者库智能匹配，150+维度精准筛选",
      icon: Brain,
      color: "blue"
    },
    {
      title: "AI 审核 150+ 指标",
      subtitle: "品牌安全、内容质量、受众匹配全方位评估",
      icon: Shield,
      color: "green"
    },
    {
      title: "AI 个性化谈判",
      subtitle: "智能定价、自动邀约、合同一键签署",
      icon: MessageSquare,
      color: "purple"
    },
    {
      title: "AI 归因＆付款",
      subtitle: "实时ROAS追踪，自动结算，透明报表",
      icon: TrendingUp,
      color: "orange"
    }
  ]

  const features = [
    "CRM 自动化", "邮件 Follow-up", "自动寄样", "实时 ROAS",
    "100+ 语言", "Shopify 对接", "TikTok Pixel", "Amazon SP-API",
    "智能定价", "合规检查", "风险评估", "数据同步"
  ]

  const pricingPlans = [
    {
      name: "Performance-Lite",
      subtitle: "小规模试水/新品Campaign",
      roas: "≥ 3×",
      price: "15%",
      unit: "归因 GMV",
      features: ["无最低消费", "15% 绩效费", "基础归因报表", "邮件支持"],
      cta: "马上试用",
      popular: false
    },
    {
      name: "Performance-Plus",
      subtitle: "成熟DTC/月均GMV ≥ $50K",
      roas: "≥ 4×",
      price: "12%",
      unit: "归因 GMV",
      features: ["奖励机制", "多语言AI客服", "自助报告", "ROAS≥4× 额外奖励5%"],
      cta: "免费获取方案",
      popular: true
    },
    {
      name: "Performance-Agency",
      subtitle: "代理商/多品牌矩阵",
      roas: "≥ 4×",
      price: "8-10%",
      unit: "阶梯递减",
      features: ["白标报表", "团队权限", "API接口", "ROAS阶梯优惠"],
      cta: "免费获取方案",
      popular: false
    },
    {
      name: "Performance-Custom",
      subtitle: "企业级/GMV ≥ $500K",
      roas: "≥ 3.5×",
      price: "定制",
      unit: "费率",
      features: ["私有部署", "高级SLA", "BI双向打通", "专属客户经理"],
      cta: "联系我们",
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* 导航栏 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">LEAP AI</span>
            </div>
            
                         <nav className="hidden md:flex items-center space-x-8">
               <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">功能</a>
               <a href="#cases" className="text-gray-600 hover:text-blue-600 transition-colors">案例</a>
               <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">价格</a>
               <a href="/login">
                 <Button variant="outline" size="sm">登录</Button>
               </a>
               <a href="/trial">
                 <Button size="sm" className="bg-blue-600 hover:bg-blue-700">免费试用</Button>
               </a>
             </nav>
          </div>
        </div>
      </header>

      {/* Hero区域 */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>与100×创作者合作，5分钟上线</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            用 AI 让你的品牌
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">瞬间触达</span>
            全球KOC
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            LEAP AI 专为中国品牌出海打造，AI驱动的KOC/KOL合作平台。从创意策划到合作上线，仅需5分钟，节省90%人工时间，实现4×ROAS增长。
          </p>

                     <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
             <a href="/trial">
               <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                 免费开始体验 <ArrowRight className="ml-2 w-5 h-5" />
               </Button>
             </a>
             <Button variant="outline" size="lg" className="px-8">
               <Play className="mr-2 w-5 h-5" /> 观看演示视频
             </Button>
           </div>

          {/* 核心指标 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "≤ 5分钟", label: "完成KOC合作" },
              { value: "≥ 4×", label: "平均ROAS" },
              { value: "90%", label: "人工时间缩减" },
              { value: "1亿+", label: "全球创作者库" }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 功能区 */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI 驱动的全自动KOC合作流程
            </h2>
            <p className="text-xl text-gray-600">
              从创作者发现到效果归因，让AI处理繁琐工作，你专注于创意和增长
            </p>
          </div>

          {/* 四步时间轴 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {timelineSteps.map((step, index) => (
              <Card key={index} className="border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                    step.color === 'blue' ? 'bg-blue-100' :
                    step.color === 'green' ? 'bg-green-100' :
                    step.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'
                  }`}>
                    <step.icon className={`w-8 h-8 ${
                      step.color === 'blue' ? 'text-blue-600' :
                      step.color === 'green' ? 'text-green-600' :
                      step.color === 'purple' ? 'text-purple-600' : 'text-orange-600'
                    }`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{step.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 功能12宫格 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors">
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 案例区 */}
      <section id="cases" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">客户成功案例</h3>
            <p className="text-xl text-gray-600">真实数据，验证效果</p>
          </div>

          {/* 案例轮播 */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* 左侧品牌信息 */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-3xl">
                      {cases[currentCase].logo}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{cases[currentCase].name}</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {cases[currentCase].metrics.map((metric, index) => (
                          <Badge key={index} className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{cases[currentCase].summary}</p>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      观看案例视频 ({cases[currentCase].videoTime})
                    </Button>
                    <Button>阅读完整案例</Button>
                  </div>
                </div>

                {/* 右侧评分 */}
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">5.0</div>
                  <div className="text-gray-600">客户满意度</div>
                </div>
              </div>
            </div>

            {/* 轮播控制 */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentCase((prev) => (prev - 1 + 3) % 3)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-2">
                {cases.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentCase ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentCase(index)}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentCase((prev) => (prev + 1) % 3)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 价格区 */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>绩效定价 - 先见效，后付费</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              按ROAS绩效付费
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              摆脱固定月费束缚，只为真实效果付费。平台自动对接广告数据，实时计算ROAS，按实际产出收取佣金。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${
                plan.popular ? 'border-2 border-blue-500 shadow-lg scale-105' : 'border border-gray-200'
              } hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">推荐方案</Badge>
                  </div>
                )}
                
                                 <CardHeader className="text-center pb-6">
                   <div className="mb-4">
                     <Badge variant="outline" className="text-blue-600 border-blue-200">
                       ROAS {plan.roas}
                     </Badge>
                   </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">{plan.subtitle}</CardDescription>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.unit}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 底部说明 */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-4xl mx-auto">
              <strong>说明：</strong>"归因 GMV"指来自平台投放且被归因的销售额；ROAS = GMV / 广告成本。支持年付保底协议，保证最低GMV后，再按绩效模型扣费。
            </p>
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            准备好让AI为你的品牌加速了吗？
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            加入数百个成功品牌的行列，体验5分钟完成KOC合作的魅力
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="/trial">
               <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                 开始免费试用 Performance-Lite
               </Button>
             </a>
             <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
               预约专属Demo
             </Button>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-xl font-bold">LEAP AI</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                专为中国品牌出海打造的AI驱动KOC/KOL合作平台，让全球营销变得简单高效。
              </p>
              <div className="text-gray-400">
                <p>© 2024 LEAP AI. 保留所有权利。</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">产品</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">功能特性</a></li>
                <li><a href="#cases" className="hover:text-white transition-colors">客户案例</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">价格方案</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">联系我们</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@leap-ai.com</li>
                <li>+86 400-123-4567</li>
                <li>微信客服：LeapAI2024</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
