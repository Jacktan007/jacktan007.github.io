import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  Users, 
  Zap, 
  TrendingUp, 
  Plus, 
  Search,
  Bell,
  Settings,
  ChevronDown,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  MessageSquare,
  Package,
  Eye,
  CheckCircle
} from "lucide-react"

export default function Dashboard() {
  // 模拟数据
  const campaigns = [
    { id: 1, name: "夏季新品推广", status: "邀约中", creators: 12, budget: "¥50,000", roas: "4.2×" },
    { id: 2, name: "双11预热活动", status: "洽谈", creators: 8, budget: "¥80,000", roas: "5.1×" },
    { id: 3, name: "品牌形象推广", status: "发货", creators: 15, budget: "¥30,000", roas: "3.8×" },
    { id: 4, name: "新用户拉新", status: "内容上线", creators: 20, budget: "¥100,000", roas: "6.2×" },
  ]

  const metrics = [
    { title: "总GMV", value: "¥2,840,000", change: "+12.5%", trend: "up" },
    { title: "平均ROAS", value: "4.8×", change: "+8.2%", trend: "up" },
    { title: "合作创作者", value: "1,247", change: "+23.1%", trend: "up" },
    { title: "活跃活动", value: "28", change: "-2.3%", trend: "down" },
  ]

  const recentCreators = [
    { name: "小美生活日记", platform: "抖音", followers: "50.2万", engagement: "8.5%", price: "¥2,800" },
    { name: "时尚达人Lisa", platform: "小红书", followers: "32.1万", engagement: "12.3%", price: "¥1,500" },
    { name: "美妆分享家", platform: "TikTok", followers: "89.6万", engagement: "6.8%", price: "¥4,200" },
    { name: "科技评测君", platform: "B站", followers: "156.8万", engagement: "9.2%", price: "¥8,500" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航 */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold">LEAP AI</span>
          </div>
          
          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-muted rounded-lg px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input 
                placeholder="搜索活动、创作者..."
                className="bg-transparent border-0 outline-none text-sm w-64"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                U
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* 左侧导航 */}
        <aside className="w-64 border-r border-border bg-muted/30 min-h-screen">
          <div className="p-6">
            <nav className="space-y-2">
              <a href="/dashboard" className="flex items-center space-x-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg px-3 py-2">
                <BarChart3 className="h-4 w-4" />
                <span>控制台</span>
              </a>
              <a href="/creators" className="flex items-center space-x-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg px-3 py-2">
                <Users className="h-4 w-4" />
                <span>创作者发现</span>
              </a>
              <a href="/campaigns" className="flex items-center space-x-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg px-3 py-2">
                <Zap className="h-4 w-4" />
                <span>活动管理</span>
              </a>
              <a href="/analytics" className="flex items-center space-x-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg px-3 py-2">
                <TrendingUp className="h-4 w-4" />
                <span>数据分析</span>
              </a>
              <a href="/settings" className="flex items-center space-x-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg px-3 py-2">
                <Settings className="h-4 w-4" />
                <span>设置</span>
              </a>
            </nav>
          </div>
        </aside>

        {/* 主内容区 */}
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* 页面标题和操作 */}
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">控制台</h1>
                <p className="text-muted-foreground">监控您的AI驱动的KOC合作表现</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                创建新活动
              </Button>
            </div>

            {/* 关键指标 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </CardTitle>
                    {metric.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <p className={`text-xs ${
                      metric.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}>
                      {metric.change} 相比上月
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 活动管道视图 */}
              <Card className="col-span-1 lg:col-span-2">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>活动管道</CardTitle>
                      <CardDescription>查看所有活动的进展状态</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      筛选
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {campaigns.map((campaign) => (
                      <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <div>
                            <div className="font-medium">{campaign.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {campaign.creators} 位创作者 · 预算 {campaign.budget}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Badge variant="secondary">{campaign.status}</Badge>
                          <Badge variant="outline">{campaign.roas}</Badge>
                          <Button variant="ghost" size="sm">
                            查看详情
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* AI推荐创作者 */}
              <Card>
                <CardHeader>
                  <CardTitle>AI推荐创作者</CardTitle>
                  <CardDescription>基于您的品牌调性智能匹配</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentCreators.map((creator, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                            <span className="font-medium text-sm">{creator.name[0]}</span>
                          </div>
                          <div>
                            <div className="font-medium text-sm">{creator.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {creator.platform} · {creator.followers} 粉丝
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{creator.price}</div>
                          <div className="text-xs text-muted-foreground">{creator.engagement} 互动率</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    查看更多推荐
                  </Button>
                </CardContent>
              </Card>

              {/* 最近活动 */}
              <Card>
                <CardHeader>
                  <CardTitle>最近活动</CardTitle>
                  <CardDescription>查看最新的合作动态</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MessageSquare className="h-4 w-4 text-blue-600 mt-1" />
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">小美生活日记</span> 已接受合作邀请
                        </p>
                        <p className="text-xs text-muted-foreground">2分钟前</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Package className="h-4 w-4 text-green-600 mt-1" />
                      <div className="flex-1">
                        <p className="text-sm">
                          夏季新品推广活动已发货至 <span className="font-medium">时尚达人Lisa</span>
                        </p>
                        <p className="text-xs text-muted-foreground">1小时前</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Eye className="h-4 w-4 text-purple-600 mt-1" />
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">美妆分享家</span> 发布了合作内容
                        </p>
                        <p className="text-xs text-muted-foreground">3小时前</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                      <div className="flex-1">
                        <p className="text-sm">
                          双11预热活动已完成，ROAS达到 <span className="font-medium">5.1×</span>
                        </p>
                        <p className="text-xs text-muted-foreground">1天前</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* 右下角AI助手 */}
      <div className="fixed bottom-6 right-6">
        <Button size="lg" className="rounded-full shadow-lg">
          <MessageSquare className="h-5 w-5 mr-2" />
          AI助手
        </Button>
      </div>
    </div>
  )
} 