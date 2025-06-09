"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  BarChart3, 
  Heart, 
  MessageCircle, 
  Share2,
  Sparkles,
  TrendingUp,
  Target,
  Globe
} from "lucide-react"

export default function Creators() {
  // 模拟创作者数据
  const creators = [
    {
      id: 1,
      name: "小美生活日记",
      avatar: "🌸",
      platform: "抖音",
      followers: "50.2万",
      engagement: "8.5%",
      location: "上海",
      category: "生活方式",
      price: "¥2,800",
      rating: 4.8,
      languages: ["中文", "英文"],
      tags: ["美妆", "穿搭", "生活"],
      aiScore: 95,
      recent: "3小时前活跃"
    },
    {
      id: 2,
      name: "时尚达人Lisa",
      avatar: "👗",
      platform: "小红书",
      followers: "32.1万",
      engagement: "12.3%",
      location: "北京",
      category: "时尚",
      price: "¥1,500",
      rating: 4.9,
      languages: ["中文"],
      tags: ["时尚", "穿搭", "奢侈品"],
      aiScore: 92,
      recent: "1小时前活跃"
    },
    {
      id: 3,
      name: "美妆分享家",
      avatar: "💄",
      platform: "TikTok",
      followers: "89.6万",
      engagement: "6.8%",
      location: "广州",
      category: "美妆",
      price: "¥4,200",
      rating: 4.7,
      languages: ["中文", "英文"],
      tags: ["美妆", "护肤", "教程"],
      aiScore: 88,
      recent: "30分钟前活跃"
    },
    {
      id: 4,
      name: "科技评测君",
      avatar: "📱",
      platform: "B站",
      followers: "156.8万",
      engagement: "9.2%",
      location: "深圳",
      category: "科技",
      price: "¥8,500",
      rating: 4.6,
      languages: ["中文"],
      tags: ["科技", "数码", "评测"],
      aiScore: 85,
      recent: "2小时前活跃"
    },
    {
      id: 5,
      name: "健身教练Amy",
      avatar: "💪",
      platform: "Instagram",
      followers: "24.7万",
      engagement: "11.8%",
      location: "香港",
      category: "健身",
      price: "¥3,200",
      rating: 4.8,
      languages: ["中文", "英文"],
      tags: ["健身", "减脂", "瑜伽"],
      aiScore: 91,
      recent: "刚刚活跃"
    },
    {
      id: 6,
      name: "美食探店王",
      avatar: "🍜",
      platform: "抖音",
      followers: "67.3万",
      engagement: "7.9%",
      location: "成都",
      category: "美食",
      price: "¥3,800",
      rating: 4.7,
      languages: ["中文"],
      tags: ["美食", "探店", "川菜"],
      aiScore: 87,
      recent: "45分钟前活跃"
    }
  ]

  const filterOptions = [
    { label: "全部平台", count: "1M+" },
    { label: "抖音", count: "450K" },
    { label: "小红书", count: "320K" },
    { label: "TikTok", count: "180K" },
    { label: "Instagram", count: "95K" },
    { label: "B站", count: "75K" },
  ]

  const categories = [
    "生活方式", "美妆", "时尚", "科技", "健身", "美食", "旅行", "母婴", "教育", "游戏"
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">创作者发现</h1>
        <p className="text-muted-foreground mb-8">从1亿+创作者中找到最适合您品牌的合作伙伴</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 示例创作者卡片 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xl">
                  🌸
                </div>
                <div>
                  <h3 className="font-semibold">小美生活日记</h3>
                  <p className="text-sm text-muted-foreground">抖音 • 3小时前活跃</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">粉丝数</span>
                    <p className="font-medium">50.2万</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">互动率</span>
                    <p className="font-medium text-green-600">8.5%</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className="text-xs">美妆</Badge>
                  <Badge variant="secondary" className="text-xs">穿搭</Badge>
                  <Badge variant="secondary" className="text-xs">生活</Badge>
                </div>
                <Button className="w-full">发起合作</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 