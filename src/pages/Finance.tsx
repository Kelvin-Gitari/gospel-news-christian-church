import {DollarSign, Download, Plus, TrendingDown, TrendingUp } from "lucide-react";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import styles from "../styles/pages/Finance.module.css";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {Label} from "../components/ui/label.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../components/ui/select.tsx";
import {Input} from "../components/ui/input.tsx";

export const Finance = () => {
    const financialSummary = {
        totalOfferings: 15420.5,
        totalTithes: 8750.0,
        totalDonations: 3200.0,
        monthlyExpenses: 12500.0,
    };

    const recentTransactions = [
        { id: 1, type: "Tithe", amount: 450.0, member: "John Smith", date: "2024-01-21", method: "Bank Transfer" },
        { id: 2, type: "Offering", amount: 850.0, member: "Anonymous", date: "2024-01-21", method: "Cash" },
        { id: 3, type: "Donation", amount: 1200.0, member: "Mary Johnson", date: "2024-01-20", method: "Check" },
        { id: 4, type: "Expense", amount: -320.0, member: "Church Utilities", date: "2024-01-19", method: "Bank Payment" },
    ];

    const budgetCategories = [
        { category: "Utilities", budgeted: 2000, spent: 1850, percentage: 92.5 },
        { category: "Ministry", budgeted: 3000, spent: 2100, percentage: 70 },
        { category: "Maintenance", budgeted: 1500, spent: 800, percentage: 53.3 },
        { category: "Outreach", budgeted: 2500, spent: 1600, percentage: 64 },
    ];

    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.headerText}>
                        <h1>Finance & Tithing</h1>
                        <p>Manage church finances, tithes, and offerings</p>
                    </div>
                    <div className={styles.buttonGroup}>
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Export Report
                        </Button>
                        <Button className="bg-gradient-divine shadow-divine">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Transaction
                        </Button>
                    </div>
                </div>

                {/* Summary */}
                <div className={styles.summaryGrid}>
                    <Card>
                        <CardHeader className="flex justify-between items-center space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Offerings</CardTitle>
                            <DollarSign className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className={styles.summaryAmount}>${financialSummary.totalOfferings.toLocaleString()}</div>
                            <p className={styles.summaryTrend}>
                                <TrendingUp className="inline h-3 w-3 mr-1" />
                                +12% from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex justify-between items-center space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Tithes</CardTitle>
                            <DollarSign className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className={styles.summaryAmount}>${financialSummary.totalTithes.toLocaleString()}</div>
                            <p className={styles.summaryTrend}>
                                <TrendingUp className="inline h-3 w-3 mr-1" />
                                +8% from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex justify-between items-center space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Donations</CardTitle>
                            <DollarSign className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className={styles.summaryAmount}>${financialSummary.totalDonations.toLocaleString()}</div>
                            <p className={styles.summaryTrend}>
                                <TrendingUp className="inline h-3 w-3 mr-1" />
                                +25% from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex justify-between items-center space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
                            <DollarSign className="h-4 w-4 text-destructive" />
                        </CardHeader>
                        <CardContent>
                            <div className={styles.summaryAmountDestructive}>${financialSummary.monthlyExpenses.toLocaleString()}</div>
                            <p className={styles.summaryTrend}>
                                <TrendingDown className="inline h-3 w-3 mr-1" />
                                -5% from last month
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="transactions">
                    <TabsList className="grid grid-cols-3 w-full">
                        <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
                        <TabsTrigger value="budget">Budget Tracking</TabsTrigger>
                        <TabsTrigger value="add">Add Transaction</TabsTrigger>
                    </TabsList>

                    <TabsContent value="transactions">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-primary">Recent Financial Activity</CardTitle>
                                <CardDescription>Latest tithes, offerings, donations, and expenses</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {recentTransactions.map((transaction) => (
                                    <div key={transaction.id} className={styles.transactionCard}>
                                        <div className={styles.transactionDetails}>
                                            <div className={transaction.amount > 0 ? styles.transactionIconPositive : styles.transactionIconNegative}>
                                                <DollarSign className="h-4 w-4" />
                                            </div>
                                            <div className={styles.transactionInfo}>
                                                <p>{transaction.type}</p>
                                                <p>{transaction.member}</p>
                                            </div>
                                        </div>
                                        <div className={styles.transactionAmount + " " + (transaction.amount > 0 ? styles.amountPositive : styles.amountNegative)}>
                                            {transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
                                            <div className="text-sm text-muted-foreground">{transaction.date}</div>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="budget">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-primary">Budget Tracking</CardTitle>
                                <CardDescription>Monitor spending against budget categories</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {budgetCategories.map((item, index) => (
                                    <div key={index} className="space-y-2">
                                        <div className={styles.budgetCategory}>
                                            <span className="font-medium">{item.category}</span>
                                            <span className="text-sm text-muted-foreground">${item.spent} / ${item.budgeted}</span>
                                        </div>
                                        <div className={styles.budgetProgressBar}>
                                            <div
                                                className={styles.budgetProgress}
                                                style={{ width: `${Math.min(item.percentage, 100)}%` }}
                                            />
                                        </div>
                                        <div className={styles.budgetStats}>
                                            <span>{item.percentage.toFixed(1)}% used</span>
                                            <span>${item.budgeted - item.spent} remaining</span>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="add">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-primary">Add Transaction</CardTitle>
                                <CardDescription>Record a new tithe, offering, donation, or expense</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="type">Transaction Type</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="tithe">Tithe</SelectItem>
                                                <SelectItem value="offering">Offering</SelectItem>
                                                <SelectItem value="donation">Donation</SelectItem>
                                                <SelectItem value="expense">Expense</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label htmlFor="amount">Amount</Label>
                                        <Input id="amount" type="number" placeholder="0.00" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="member">Member/Source</Label>
                                        <Input id="member" placeholder="Member name or Anonymous" />
                                    </div>
                                    <div>
                                        <Label htmlFor="method">Payment Method</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select method" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="cash">Cash</SelectItem>
                                                <SelectItem value="check">Check</SelectItem>
                                                <SelectItem value="transfer">Bank Transfer</SelectItem>
                                                <SelectItem value="card">Card</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="date">Date</Label>
                                    <Input type="date" id="date" />
                                </div>

                                <Button className="w-full bg-gradient-divine shadow-divine">Add Transaction</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </Layout>
    );
};
