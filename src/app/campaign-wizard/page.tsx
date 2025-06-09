"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowRight, 
  ArrowLeft, 
  Target, 
  Package, 
  DollarSign, 
  CheckCircle,
  Sparkles
} from "lucide-react"

export default function CampaignWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // 第一步：目标 & KPI
    campaignName: "",
    campaignType: "",
    targetAudience: "",
    targetROAS: "",
    targetGMV: "",
    
    // 第二步：产品信息
    productName: "",
    productCategory: "",
    productPrice: "",
    productDescription: "",
    brandTone: "",
    
    // 第三步：预算 & 时程
    totalBudget: "",
    budgetPerCreator: "",
    timeline: "",
    deliverables: []
  })

  const steps = [
    { number: 1, title: "目标 & KPI", description: "定义活动目标和关键指标", icon: Target },
    { number: 2, title: "产品信息", description: "详细描述产品和品牌调性", icon: Package },
    { number: 3, title: "预算 & 时程", description: "设置预算和时间安排", icon: DollarSign }
  ]

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // 这里处理表单提交
    console.log("提交活动数据:", formData)
    alert("活动创建成功！AI正在为您匹配最适合的创作者...")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航 */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">LEAP AI</span>
            </div>
            <div className="text-sm text-muted-foreground">
              活动创建向导
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* 进度条 */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center space-x-3 ${
                  currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step.number 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{step.title}</div>
                    <div className="text-xs text-muted-foreground">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-24 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 步骤内容 */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "第一步：设定目标和KPI"}
              {currentStep === 2 && "第二步：产品信息"}
              {currentStep === 3 && "第三步：预算和时程"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "明确您的活动目标和期望达成的关键指标"}
              {currentStep === 2 && "详细描述您的产品和品牌调性"}
              {currentStep === 3 && "设置活动预算和时间安排"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">活动名称</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="例：春季新品推广活动"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">目标ROAS</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="例：4.0×"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">目标受众</label>
                  <textarea
                    className="w-full p-3 border rounded-lg"
                    placeholder="描述您的目标用户群体"
                    rows={3}
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">产品名称</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="例：玻尿酸精华面膜"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">产品类别</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>美妆护肤</option>
                    <option>时尚服饰</option>
                    <option>数码科技</option>
                    <option>食品饮料</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">品牌调性</label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer">专业严谨</Badge>
                    <Badge variant="outline" className="cursor-pointer">年轻活力</Badge>
                    <Badge variant="outline" className="cursor-pointer">奢华高端</Badge>
                    <Badge variant="outline" className="cursor-pointer">亲民友好</Badge>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">总预算</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="例：¥50,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">活动时长</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>1周</option>
                    <option>2周</option>
                    <option>1个月</option>
                    <option>2个月</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">期望交付内容</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>短视频</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>图片内容</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" />
                      <span>直播带货</span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 导航按钮 */}
        <div className="flex justify-center space-x-4 mt-8">
          {currentStep > 1 && (
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              上一步
            </Button>
          )}
          {currentStep < 3 ? (
            <Button onClick={() => setCurrentStep(currentStep + 1)}>
              下一步
            </Button>
          ) : (
            <Button>
              创建活动
            </Button>
          )}
        </div>
      </div>
    </div>
  )
} 