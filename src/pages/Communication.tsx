import {Bell, Mail, Phone, Plus, Send, Users} from "lucide-react";
import Layout from "../components/Layout";
import {Button} from "../components/ui/button";
import styles from "../styles/pages/Communication.module.css";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../components/ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../components/ui/card";
import {Badge} from "../components/ui/badge.tsx";
import {Label} from "../components/ui/label.tsx";
import {Input} from "../components/ui/input.tsx";
import {Textarea} from "../components/ui/textarea.tsx";
import {Checkbox} from "../components/ui/checkbox.tsx";

export const Communication = () => {
    const recentMessages = [
        {
            id: 1,
            type: "Email",
            subject: "Sunday Service Reminder",
            recipients: 145,
            status: "Sent",
            date: "2024-01-20",
            time: "10:30 AM"
        },
        {
            id: 2,
            type: "SMS",
            subject: "Prayer Meeting Tonight",
            recipients: 68,
            status: "Sent",
            date: "2024-01-19",
            time: "3:45 PM"
        },
        {
            id: 3,
            type: "Announcement",
            subject: "New Member Welcome",
            recipients: 180,
            status: "Scheduled",
            date: "2024-01-22",
            time: "9:00 AM"
        }
    ];

    const communicationGroups = [
        {name: "All Members", count: 180, selected: true},
        {name: "Youth Ministry", count: 35, selected: false},
        {name: "Women's Fellowship", count: 28, selected: false},
        {name: "Men's Brotherhood", count: 22, selected: false},
        {name: "Choir Members", count: 24, selected: false},
        {name: "Church Leaders", count: 12, selected: false}
    ];

    const birthdayWishes = [
        {name: "Sarah Johnson", date: "Today", sent: true},
        {name: "Michael Brown", date: "Tomorrow", sent: false},
        {name: "Grace Wilson", date: "Jan 24", sent: false}
    ];

    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.headerRow}>
                    <div>
                        <h1 className={styles.title}>Communication</h1>
                        <p className={styles.subtitle}>Send announcements, messages, and stay connected</p>
                    </div>
                    <Button className={styles.newMessageButton}>
                        <Plus className="icon"/>
                        New Message
                    </Button>
                </div>

                <Tabs defaultValue="messages" className={styles.tabs}>
                    <TabsList className={styles.tabsList}>
                        <TabsTrigger value="messages">Recent Messages</TabsTrigger>
                        <TabsTrigger value="compose">Compose</TabsTrigger>
                        <TabsTrigger value="automated">Automated</TabsTrigger>
                        <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
                    </TabsList>

                    <TabsContent value="messages" className={styles.tabContent}>
                        <Card className={styles.shadowPeaceful}>
                            <CardHeader>
                                <CardTitle className={styles.textPrimary}>Message History</CardTitle>
                                <CardDescription>Track sent and scheduled communications</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className={styles.messageList}>
                                    {recentMessages.map((message) => (
                                        <div key={message.id} className={styles.messageItem}>
                                            <div className={styles.messageInfo}>
                                                <div className={styles.iconWrapper}>
                                                    {message.type === "Email" && <Mail className={styles.icon}/>}
                                                    {message.type === "SMS" && <Phone className={styles.icon}/>}
                                                    {message.type === "Announcement" && <Bell className={styles.icon}/>}
                                                </div>
                                                <div>
                                                    <p className={styles.messageSubject}>{message.subject}</p>
                                                    <div className={styles.messageMeta}>
                                                        <span>{message.type}</span>
                                                        <span>{message.recipients} recipients</span>
                                                        <span>{message.date} at {message.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Badge
                                                variant={message.status === "Sent" ? "default" : "secondary"}>{message.status}</Badge>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="compose" className={styles.tabContent}>
                        <div className={styles.composeGrid}>
                            <div className={styles.composeMain}>
                                <Card className={styles.shadowPeaceful}>
                                    <CardHeader>
                                        <CardTitle className={styles.textPrimary}>Compose Message</CardTitle>
                                        <CardDescription>Send announcements to church members</CardDescription>
                                    </CardHeader>
                                    <CardContent className={styles.cardContentSpacing}>
                                        <div className={styles.typeSelector}>
                                            <Button variant="outline"><Mail className={styles.icon}/> Email</Button>
                                            <Button variant="outline"><Phone className={styles.icon}/> SMS</Button>
                                            <Button variant="outline"><Bell className={styles.icon}/> App
                                                Notification</Button>
                                        </div>
                                        <div>
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input id="subject" placeholder="Message subject..."/>
                                        </div>
                                        <div>
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea id="message" placeholder="Type your message here..." rows={8}/>
                                        </div>
                                        <div className={styles.buttonRow}>
                                            <Button className={styles.gradientDivine}><Send
                                                className={styles.icon}/> Send Now</Button>
                                            <Button variant="outline">Schedule for Later</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div>
                                <Card className={styles.shadowPeaceful}>
                                    <CardHeader>
                                        <CardTitle className={styles.recipientsTitle}><Users
                                            className={styles.icon}/> Recipients</CardTitle>
                                        <CardDescription>Select who to send to</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className={styles.recipientList}>
                                            {communicationGroups.map((group, index) => (
                                                <div key={index} className={styles.groupItem}>
                                                    <Checkbox id={`group-${index}`} defaultChecked={group.selected}/>
                                                    <Label htmlFor={`group-${index}`} className={styles.groupLabel}>
                                                        <span>{group.name}</span>
                                                        <span className={styles.groupCount}>({group.count})</span>
                                                    </Label>
                                                </div>
                                            ))}
                                            <div className={styles.totalSelected}>
                                                <p className={styles.totalSelectedText}>
                                                    Total selected: <span
                                                    className={styles.textPrimary}>180 members</span>
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="automated" className={styles.tabContent}>
                        <div className={styles.gridTwoCols}>
                            <Card className={styles.shadowPeaceful}>
                                <CardHeader>
                                    <CardTitle className={styles.textPrimary}>Birthday Wishes</CardTitle>
                                    <CardDescription>Automated birthday greetings for members</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className={styles.messageList}>
                                        {birthdayWishes.map((birthday, index) => (
                                            <div key={index} className={styles.messageItem}>
                                                <div>
                                                    <p className={styles.messageSubject}>{birthday.name}</p>
                                                    <p className={styles.messageMetaText}>{birthday.date}</p>
                                                </div>
                                                {birthday.sent ? (
                                                    <Badge variant="default">Sent</Badge>
                                                ) : (
                                                    <Button size="sm" variant="outline">Send Now</Button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className={styles.shadowPeaceful}>
                                <CardHeader>
                                    <CardTitle className={styles.textPrimary}>Service Reminders</CardTitle>
                                    <CardDescription>Automatic reminders for church services</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className={styles.messageList}>
                                        <div className={styles.messageItem}>
                                            <div>
                                                <p className={styles.messageSubject}>Sunday Service Reminder</p>
                                                <p className={styles.messageMetaText}>Sent every Saturday at 6:00 PM</p>
                                            </div>
                                            <Badge variant="default">Active</Badge>
                                        </div>
                                        <div className={styles.messageItem}>
                                            <div>
                                                <p className={styles.messageSubject}>Bible Study Reminder</p>
                                                <p className={styles.messageMetaText}>Sent every Wednesday at 4:00
                                                    PM</p>
                                            </div>
                                            <Badge variant="default">Active</Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="newsletter" className={styles.tabContent}>
                        <Card className={styles.shadowPeaceful}>
                            <CardHeader>
                                <CardTitle className={styles.textPrimary}>Newsletter Builder</CardTitle>
                                <CardDescription>Create and send church newsletters</CardDescription>
                            </CardHeader>
                            <CardContent className={styles.cardContentSpacing}>
                                <div>
                                    <Label htmlFor="newsletter-title">Newsletter Title</Label>
                                    <Input id="newsletter-title" placeholder="Weekly Church Update"/>
                                </div>
                                <div className={styles.gridTwoCols}>
                                    <div>
                                        <Label htmlFor="edition">Edition</Label>
                                        <Input id="edition" placeholder="e.g., January 2024"/>
                                    </div>
                                    <div>
                                        <Label htmlFor="issue">Issue Number</Label>
                                        <Input id="issue" placeholder="e.g., Issue #4"/>
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="newsletter-content">Newsletter Content</Label>
                                    <Textarea id="newsletter-content"
                                              placeholder="Write your newsletter content here..." rows={10}/>
                                </div>
                                <div className={styles.buttonRow}>
                                    <Button className={styles.gradientDivine}><Send className={styles.icon}/> Send
                                        Newsletter</Button>
                                    <Button variant="outline">Save Draft</Button>
                                    <Button variant="outline">Preview</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </Layout>
    );
};