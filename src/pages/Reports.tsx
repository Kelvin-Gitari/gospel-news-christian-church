import {BarChart3, Calendar, DollarSign, Download, Eye, TrendingUp, Users} from "lucide-react";
import Layout from "../components/Layout";
import {Button} from "../components/ui/button";
import styles from "../styles/pages/Reports.module.css";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../components/ui/tabs.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../components/ui/card.tsx";
import {Label} from "../components/ui/label.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../components/ui/select.tsx";
import {Input} from "../components/ui/input.tsx";

const membershipReports = [
    {
        title: "Total Members",
        value: "245",
        change: "+12 this month",
        trend: "up"
    },
    {
        title: "New Members",
        value: "8",
        change: "This month",
        trend: "up"
    },
    {
        title: "Average Attendance",
        value: "158",
        change: "+5% vs last month",
        trend: "up"
    },
    {
        title: "Member Retention",
        value: "94%",
        change: "+2% improvement",
        trend: "up"
    }
];

const financialReports = [
    {
        title: "Monthly Income",
        value: "$27,370",
        change: "+8% vs last month",
        trend: "up"
    },
    {
        title: "Monthly Expenses",
        value: "$12,500",
        change: "-5% vs last month",
        trend: "down"
    },
    {
        title: "Tithe Collection",
        value: "$8,750",
        change: "+12% vs last month",
        trend: "up"
    },
    {
        title: "Net Balance",
        value: "$14,870",
        change: "+15% vs last month",
        trend: "up"
    }
];

const availableReports = [
    {
        category: "Membership",
        reports: [
            "Member Directory Report",
            "New Member Report",
            "Member Roles & Positions",
            "Birthday & Anniversary List",
            "Attendance Summary Report"
        ]
    },
    {
        category: "Financial",
        reports: [
            "Tithe & Offering Report",
            "Monthly Financial Summary",
            "Budget vs Actual Report",
            "Donor Contribution Report",
            "Expense Breakdown Report"
        ]
    },
    {
        category: "Ministry",
        reports: [
            "Ministry Participation Report",
            "Ministry Leader Report",
            "Event Attendance Report",
            "Service Schedule Report",
            "Volunteer Hours Report"
        ]
    },
    {
        category: "Communication",
        reports: [
            "Message Delivery Report",
            "Email Campaign Analytics",
            "SMS Usage Report",
            "Communication Preferences",
            "Birthday Wishes Sent"
        ]
    }
];

export const Reports = () => {
    return (
        <Layout>
            <div>
                <div className={styles.headerRow}>
                    <div>
                        <h1 className={styles.title}>Reports & Analytics</h1>
                        <p className={styles.subtitle}>Generate insights and track church performance</p>
                    </div>
                    <Button className={styles.buttonExport}>
                        <Download className={styles.iconLeft}/>
                        Export Reports
                    </Button>
                </div>

                <Tabs defaultValue="overview">
                    <TabsList className={styles.tabsList}>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="membership">Membership</TabsTrigger>
                        <TabsTrigger value="financial">Financial</TabsTrigger>
                        <TabsTrigger value="generate">Generate</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview">
                        <div className={styles.gridCards}>
                            <Card className={styles.shadowPeaceful}>
                                <CardHeader className={styles.cardHeader}>
                                    <CardTitle className={styles.reportTitle}>Total Members</CardTitle>
                                    <Users className={styles.iconPrimary}/>
                                </CardHeader>
                                <CardContent>
                                    <div className={styles.reportValue}>245</div>
                                    <p className={styles.reportChange}>
                                        <TrendingUp className={styles.iconSmall}/>
                                        +12 this month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className={styles.shadowPeaceful}>
                                <CardHeader className={styles.cardHeader}>
                                    <CardTitle className={styles.reportTitle}>Monthly Income</CardTitle>
                                    <DollarSign className={styles.iconPrimary}/>
                                </CardHeader>
                                <CardContent>
                                    <div className={styles.reportValue}>$27,370</div>
                                    <p className={styles.reportChange}>
                                        <TrendingUp className={styles.iconSmall}/>
                                        +8% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className={styles.shadowPeaceful}>
                                <CardHeader className={styles.cardHeader}>
                                    <CardTitle className={styles.reportTitle}>Average Attendance</CardTitle>
                                    <BarChart3 className={styles.iconPrimary}/>
                                </CardHeader>
                                <CardContent>
                                    <div className={styles.reportValue}>158</div>
                                    <p className={styles.reportChange}>
                                        <TrendingUp className={styles.iconSmall}/>
                                        +5% vs last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className={styles.shadowPeaceful}>
                                <CardHeader className={styles.cardHeader}>
                                    <CardTitle className={styles.reportTitle}>Active Ministries</CardTitle>
                                    <Users className={styles.iconPrimary}/>
                                </CardHeader>
                                <CardContent>
                                    <div className={styles.reportValue}>6</div>
                                    <p className={styles.reportChange}>All ministries active</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className={styles.gridReports}>
                            <Card className={styles.shadowPeaceful}>
                                <CardHeader>
                                    <CardTitle className={styles.textPrimary}>Quick Report Access</CardTitle>
                                    <CardDescription>Most requested reports</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <Button variant="outline" className={styles.quickAccessButton}>
                                            <BarChart3 className={styles.iconLeft}/>
                                            Monthly Financial Summary
                                        </Button>
                                        <Button variant="outline" className={styles.quickAccessButton}>
                                            <Users className={styles.iconLeft}/>
                                            Member Attendance Report
                                        </Button>
                                        <Button variant="outline" className={styles.quickAccessButton}>
                                            <DollarSign className={styles.iconLeft}/>
                                            Tithe & Offering Report
                                        </Button>
                                        <Button variant="outline" className={styles.quickAccessButton}>
                                            <Calendar className={styles.iconLeft}/>
                                            Service Schedule Report
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className={styles.shadowPeaceful}>
                                <CardHeader>
                                    <CardTitle className={styles.textPrimary}>Recent Reports</CardTitle>
                                    <CardDescription>Last generated reports</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        <div className={styles.recentReportBox}>
                                            <div>
                                                <p className={styles.reportRecentTitle}>December Financial Report</p>
                                                <p className={styles.reportChange}>Generated on Jan 1, 2024</p>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                <Download className={styles.iconSmall}/>
                                            </Button>
                                        </div>
                                        <div className={styles.recentReportBox}>
                                            <div>
                                                <p className={styles.reportRecentTitle}>Member Directory</p>
                                                <p className={styles.reportChange}>Generated on Dec 28, 2023</p>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                <Download className={styles.iconSmall}/>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="membership">
                        <div className={styles.gridCards}>
                            {membershipReports.map((report, idx) => (
                                <Card key={idx} className={styles.shadowPeaceful}>
                                    <CardHeader className={styles.cardHeader}>
                                        <CardTitle className={styles.reportTitle}>{report.title}</CardTitle>
                                        <Users className={styles.iconPrimary}/>
                                    </CardHeader>
                                    <CardContent>
                                        <div className={styles.reportValue}>{report.value}</div>
                                        <p className={styles.reportChange}>
                                            {report.trend === "up" && <TrendingUp className={styles.iconSmall}/>}
                                            {report.change}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="financial">
                        <div className={styles.gridCards}>
                            {financialReports.map((report, idx) => (
                                <Card key={idx} className={styles.shadowPeaceful}>
                                    <CardHeader className={styles.cardHeader}>
                                        <CardTitle className={styles.reportTitle}>{report.title}</CardTitle>
                                        <DollarSign className={styles.iconPrimary}/>
                                    </CardHeader>
                                    <CardContent>
                                        <div className={styles.reportValue}>{report.value}</div>
                                        <p className={styles.reportChange}>
                                            {report.trend === "up" && <TrendingUp className={styles.iconSmall}/>}
                                            {report.trend === "down" && <TrendingUp className={styles.iconSmall}
                                                                                    style={{transform: "rotate(180deg)"}}/>}
                                            {report.change}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="generate">
                        <div className={styles.gridGenerate}>
                            <div>
                                <Card className={styles.shadowPeaceful}>
                                    <CardHeader>
                                        <CardTitle className={styles.textPrimary}>Generate Custom Report</CardTitle>
                                        <CardDescription>Create detailed reports for specific needs</CardDescription>
                                    </CardHeader>
                                    <CardContent className={styles.generateContent}>
                                        <div className={styles.gridForm}>
                                            <div>
                                                <Label htmlFor="report-category">Report Category</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select category"/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="membership">Membership</SelectItem>
                                                        <SelectItem value="financial">Financial</SelectItem>
                                                        <SelectItem value="ministry">Ministry</SelectItem>
                                                        <SelectItem value="communication">Communication</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div>
                                                <Label htmlFor="report-type">Report Type</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select type"/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="summary">Summary</SelectItem>
                                                        <SelectItem value="detailed">Detailed</SelectItem>
                                                        <SelectItem value="comparison">Comparison</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className={styles.gridForm}>
                                            <div>
                                                <Label htmlFor="date-from">From Date</Label>
                                                <Input type="date" id="date-from"/>
                                            </div>
                                            <div>
                                                <Label htmlFor="date-to">To Date</Label>
                                                <Input type="date" id="date-to"/>
                                            </div>
                                        </div>
                                        <div className={styles.generateActions}>
                                            <Button className={styles.buttonExport}>
                                                <BarChart3 className={styles.iconLeft}/>
                                                Generate Report
                                            </Button>
                                            <Button variant="outline">
                                                <Eye className={styles.iconLeft}/>
                                                Preview
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div>
                                <Card className={styles.shadowPeaceful}>
                                    <CardHeader>
                                        <CardTitle className={styles.textPrimary}>Available Reports</CardTitle>
                                        <CardDescription>Choose from predefined reports</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div>
                                            {availableReports.map((category, idx) => (
                                                <div key={idx}>
                                                    <h4 className={styles.reportCategory}>{category.category}</h4>
                                                    <div>
                                                        {category.reports.map((report, rIdx) => (
                                                            <Button
                                                                key={rIdx}
                                                                variant="ghost"
                                                                size="sm"
                                                                className={styles.availableReportButton}
                                                            >
                                                                {report}
                                                            </Button>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </Layout>
    );
};