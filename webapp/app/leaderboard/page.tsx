import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Suspense } from "react"

import { LeaderboardTable, LeaderboardTable_m1, LeaderboardTable_m2, LeaderboardTable_m3 } from "@/components/LeaderboardTable"

export default function Learderboard() {
  return (
    <Suspense>
      <div className="animate-in flex flex-col justify-center px-24 py-6">
        <Tabs defaultValue="2" className="flex flex-col justify-center gap-y-6">
          <TabsList className="bg-yellow-50 gap-x-6">
            <TabsTrigger value="2" className="border rounded-lg text-2xl">Matching Game 1</TabsTrigger>
            <TabsTrigger value="3" className="border rounded-lg text-2xl">Matching Game 2</TabsTrigger>
            <TabsTrigger value="4" className="border rounded-lg text-2xl">Matching Game 3</TabsTrigger>
          </TabsList>

          <TabsContent value="2">
            <Card className="container mx-auto w-3/4 bg-yellow-50 border border-gray rounded-lg">
              <CardHeader className="pb-4 text-center">
                <CardTitle>Matching Game 1 Leaderboard</CardTitle>
                <CardDescription>Check out the top performers in our community!</CardDescription>
              </CardHeader>

              <CardContent>
                <LeaderboardTable_m1 />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="3">
            <Card className="container mx-auto w-3/4 bg-yellow-50 border border-gray rounded-lg">
              <CardHeader className="pb-4 text-center">
                <CardTitle>Matching Game 2 Leaderboard</CardTitle>
                <CardDescription>Check out the top performers in our community!</CardDescription>
              </CardHeader>

              <CardContent>
                <LeaderboardTable_m2 />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="4">
            <Card className="container mx-auto w-3/4 bg-yellow-50 border border-gray rounded-lg">
              <CardHeader className="pb-4 text-center">
                <CardTitle>Matching Game 3 Leaderboard</CardTitle>
                <CardDescription>Check out the top performers in our community!</CardDescription>
              </CardHeader>

              <CardContent>
                <LeaderboardTable_m3 />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Suspense>
  )
}
