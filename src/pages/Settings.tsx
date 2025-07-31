import {Bell, Church, Database, Save, Settings2, Shield} from "lucide-react";
import Layout from "../components/Layout";
import {Button} from "../components/ui/button";
import styles from "../styles/pages/Settings.module.css";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../components/ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../components/ui/card";
import {Label} from "../components/ui/label";
import {Input} from "../components/ui/input";
import {Textarea} from "../components/ui/textarea";
import {Switch} from "../components/ui/switch";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../components/ui/select";

export const Settings = () => {
    return (
        <Layout>
            <div className={styles.pageSpacing}>
                <div className={styles.headerRow}>
                    <div>
                        <h1 className={styles.title}>Settings</h1>
                        <p className={styles.subtitle}>Manage church settings and system preferences</p>
                    </div>
                    <Button className={styles.buttonSave}>
                        <Save className={styles.iconLeft}/>
                        Save Changes
                    </Button>
                </div>

                <Tabs defaultValue="church" className={styles.tabsSpacing}>
                    <TabsList className={styles.tabsList}>
                        <TabsTrigger value="church">Church Info</TabsTrigger>
                        <TabsTrigger value="notifications">Notifications</TabsTrigger>
                        <TabsTrigger value="security">Security</TabsTrigger>
                        <TabsTrigger value="backup">Backup</TabsTrigger>
                        <TabsTrigger value="system">System</TabsTrigger>
                    </TabsList>

                    <TabsContent value="church" className={styles.tabContentSpacing}>
                        <Card className={styles.shadowPeaceful}>
                            <CardHeader>
                                <CardTitle className={styles.cardTitleRow}>
                                    <Church className={styles.iconCard}/>
                                    Church Information
                                </CardTitle>
                                <CardDescription>Basic information about your church</CardDescription>
                            </CardHeader>
                            <CardContent className={styles.cardContentSpacing}>
                                <div className={styles.gridTwoCol}>
                                    <div>
                                        <Label htmlFor="church-name">Church Name</Label>
                                        <Input id="church-name" defaultValue="Gospel News Christian Church"/>
                                    </div>
                                    <div>
                                        <Label htmlFor="church-motto">Church Motto</Label>
                                        <Input id="church-motto" defaultValue="Home of All Divine Blessings"/>
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="church-address">Church Address</Label>
                                    <Textarea
                                        id="church-address"
                                        defaultValue="123 Faith Street, Gospel City, GC 12345"
                                        rows={3}
                                    />
                                </div>
                                <div className={styles.gridThreeCol}>
                                    <div>
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" defaultValue="+1 (555) 123-4567"/>
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" defaultValue="info@gncc.org"/>
                                    </div>
                                    <div>
                                        <Label htmlFor="website">Website</Label>
                                        <Input id="website" defaultValue="www.gncc.org"/>
                                    </div>
                                </div>
                                <div className={styles.gridTwoCol}>
                                    <div>
                                        <Label htmlFor="pastor">Senior Pastor</Label>
                                        <Input id="pastor" defaultValue="Pastor Johnson"/>
                                    </div>
                                    <div>
                                        <Label htmlFor="founded">Founded Year</Label>
                                        <Input id="founded" defaultValue="1985"/>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className={styles.shadowPeaceful}>
                            <CardHeader>
                                <CardTitle className={styles.cardTitleRow}>Service Times</CardTitle>
                                <CardDescription>Regular service schedule</CardDescription>
                            </CardHeader>
                            <CardContent className={styles.cardContentSpacing}>
                                <div className={styles.gridTwoCol}>
                                    <div>
                                        <Label htmlFor="sunday-service">Sunday Service</Label>
                                        <Input id="sunday-service" defaultValue="9:00 AM - 12:00 PM"/>
                                    </div>
                                    <div>
                                        <Label htmlFor="bible-study">Bible Study</Label>
                                        <Input id="bible-study" defaultValue="Wednesday 7:00 PM"/>
                                    </div>
                                </div>
                                <div className={styles.gridTwoCol}>
                                    <div>
                                        <Label htmlFor="prayer-meeting">Prayer Meeting</Label>
                                        <Input id="prayer-meeting" defaultValue="Friday 6:00 AM"/>
                                    </div>
                                    <div>
                                        <Label htmlFor="youth-service">Youth Service</Label>
                                        <Input id="youth-service" defaultValue="Friday 7:00 PM"/>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="notifications" className={styles.tabContentSpacing}>
                        <Card className={styles.shadowPeaceful}>
                            <CardHeader>
                                <CardTitle className={styles.cardTitleRow}>
                                    <Bell className={styles.iconCard}/>
                                    Notification Settings
                                </CardTitle>
                                <CardDescription>Configure automated notifications and reminders</CardDescription>
                            </CardHeader>
                            <CardContent className={styles.spaceY6}>
                                <div className={styles.flexBetween}>
                                    <div>
                                        <h4 className={styles.fontMedium}>Service Reminders</h4>
                                        <p className={styles.textMuted}>Send automatic reminders before services</p>
                                    </div>
                                    <Switch defaultChecked/>
                                </div>
                                <div className={styles.flexBetween}>
                                    <div>
                                        <h4 className={styles.fontMedium}>Birthday Notifications</h4>
                                        <p className={styles.textMuted}>Automatic birthday wishes to members</p>
                                    </div>
                                    <Switch defaultChecked/>
                                </div>
                                <div className={styles.flexBetween}>
                                    <div>
                                        <h4 className={styles.fontMedium}>Event Announcements</h4>
                                        <p className={styles.textMuted}>Notify members about upcoming events</p>
                                    </div>
                                    <Switch defaultChecked/>
                                </div>
                                <div className={styles.flexBetween}>
                                    <div>
                                        <h4 className={styles.fontMedium}>Tithe Reminders</h4>
                                        <p className={styles.textMuted}>Monthly tithe and offering reminders</p>
                                    </div>
                                    <Switch/>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className={styles.shadowPeaceful}>
                            <CardHeader>
                                <CardTitle className={styles.cardTitleRow}>SMS & Email Settings</CardTitle>
                                <CardDescription>Configure communication channels</CardDescription>
                            </CardHeader>
                            <CardContent className={styles.cardContentSpacing}>
                                <div>
                                    <Label htmlFor="sms-provider">SMS Provider</Label>
                                    <Select defaultValue="twilio">
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="twilio">Twilio</SelectItem>
                                            <SelectItem value="nexmo">Nexmo</SelectItem>
                                            <SelectItem value="local">Local Gateway</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="email-provider">Email Provider</Label>
                                    <Select defaultValue="sendgrid">
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="sendgrid">SendGrid</SelectItem>
                                            <SelectItem value="mailgun">Mailgun</SelectItem>
                                            <SelectItem value="smtp">Custom SMTP</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="security" className={styles.tabContentSpacing}>
                        <Card className={styles.shadowPeaceful}>
                            <CardHeader>
                                <CardTitle className={styles.cardTitleRow}>
                                    <Shield className={styles.iconCard}/>
                                    Security Settings
                                </CardTitle>
                                <CardDescription>Manage access control and security preferences</CardDescription>
                            </CardHeader>
                            <CardContent className={styles.spaceY6}>
                                <div className={styles.flexBetween}>
                                    <div>
                                        <h4 className={styles.fontMedium}>Two-Factor Authentication</h4>
                                        <p className={styles.textMuted}>Require 2FA for admin accounts</p>
                                    </div>
                                    <Switch defaultChecked/>
                                </div>
                                <div className={styles.flexBetween}>
                                    <div>
                                        <h4 className={styles.fontMedium}>Session Timeout</h4>
                                        <p className={styles.textMuted}>Auto-logout after inactivity</p>
                                    </div>
                                    <Switch defaultChecked/>
                                </div>
                                <div className={styles.flexBetween}>
                                    <div>
                                        <h4 className={styles.fontMedium}>Login Notifications</h4>
                                        <p className={styles.textMuted}>Email alerts for admin logins</p>
                                    </div>
                                    <Switch defaultChecked/>
                                </div>
                                <div>
                                    <Label htmlFor="session-duration">Session Duration (hours)</Label>
                                    <Select defaultValue="8">
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">1 hour</SelectItem>
                                            <SelectItem value="4">4 hours</SelectItem>
                                            <SelectItem value="8">8 hours</SelectItem>
                                            <SelectItem value="24">24 hours</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className={styles.shadowPeaceful}>
                            <CardHeader>
                                <CardTitle className={styles.cardTitleRow}>User Roles & Permissions</CardTitle>
                                <CardDescription>Define access levels for different users</CardDescription>
                            </CardHeader>
                            <CardContent className={styles.cardContentSpacing}>
                                <div className={styles.spaceY3}>
                                    <div className={styles.roleCard}>
                                        <div>
                                            <h4 className={styles.fontMedium}>Admin</h4>
                                            <p className={styles.textMuted}>Full system access</p>
                                        </div>
                                        <Button variant="outline" size="sm">Edit</Button>
                                    </div>
                                    <div className={styles.roleCard}>
                                        <div>
                                            <h4 className={styles.fontMedium}>Pastor</h4>
                                            <p className={styles.textMuted}>Ministry and member management</p>
                                        </div>
                                        <Button variant="outline" size="sm">Edit</Button>
                                    </div>
                                    <div className={styles.roleCard}>
                                        <div>
                                            <h4 className={styles.fontMedium}>Secretary</h4>
                                            <p className={styles.textMuted}>Member registration and communication</p>
                                        </div>
                                        <Button variant="outline" size="sm">Edit</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="backup" className={styles.tabContentSpacing}>
                        <Card className={styles.shadowPeaceful}>
                            <CardHeader>
                                <CardTitle className={styles.cardTitleRow}>
                                    <Database className={styles.iconCard}/>
                                    Backup & Data Management
                                </CardTitle>
                                <CardDescription>Configure automatic backups and data retention</CardDescription>
                            </CardHeader>
                            <CardContent className={styles.spaceY6}>
                                <div className={styles.flexBetween}>
                                    <div>
                                        <h4 className={styles.fontMedium}>Automatic Backups</h4>
                                        <p className={styles.textMuted}>Daily database backups</p>
                                    </div>
                                    <Switch defaultChecked/>
                                </div>
                                <div>
                                    <Label htmlFor="backup-frequency">Backup Frequency</Label>
                                    <Select defaultValue="daily">
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="hourly">Every hour</SelectItem>
                                            <SelectItem value="daily">Daily</SelectItem>
                                            <SelectItem value="weekly">Weekly</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="retention-period">Backup Retention (days)</Label>
                                    <Select defaultValue="30">
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="7">7 days</SelectItem>
                                            <SelectItem value="30">30 days</SelectItem>
                                            <SelectItem value="90">90 days</SelectItem>
                                            <SelectItem value="365">1 year</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className={styles.pt4 + " " + styles.spaceY2}>
                                    <Button className={styles.wFull}>Create Manual Backup</Button>
                                    <Button variant="outline" className={styles.wFull}>Download Latest Backup</Button>
                                    <Button variant="outline" className={styles.wFull}>View Backup History</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="system" className={styles.tabContentSpacing}>
                        <Card className={styles.shadowPeaceful}>
                            <CardHeader>
                                <CardTitle className={styles.cardTitleRow}>
                                    <Settings2 className={styles.iconCard}/>
                                    System Preferences
                                </CardTitle>
                                <CardDescription>General system configuration</CardDescription>
                            </CardHeader>
                            <CardContent className={styles.cardContentSpacing}>
                                <div>
                                    <Label htmlFor="timezone">Time Zone</Label>
                                    <Select defaultValue="america-new-york">
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="america-new-york">Eastern Time (ET)</SelectItem>
                                            <SelectItem value="america-chicago">Central Time (CT)</SelectItem>
                                            <SelectItem value="america-denver">Mountain Time (MT)</SelectItem>
                                            <SelectItem value="america-los-angeles">Pacific Time (PT)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="date-format">Date Format</Label>
                                    <Select defaultValue="mm-dd-yyyy">
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                                            <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                                            <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="currency">Currency</Label>
                                    <Select defaultValue="usd">
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="usd">USD ($)</SelectItem>
                                            <SelectItem value="eur">EUR (€)</SelectItem>
                                            <SelectItem value="gbp">GBP (£)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className={styles.flexBetween}>
                                    <div>
                                        <h4 className={styles.fontMedium}>Maintenance Mode</h4>
                                        <p className={styles.textMuted}>Temporarily disable public access</p>
                                    </div>
                                    <Switch/>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className={styles.shadowPeaceful}>
                            <CardHeader>
                                <CardTitle className={styles.cardTitleRow}>System Information</CardTitle>
                                <CardDescription>Current system status and version info</CardDescription>
                            </CardHeader>
                            <CardContent className={styles.spaceY3}>
                                <div className={styles.flexBetween}>
                                    <span className={styles.fontMedium}>Version:</span>
                                    <span>1.0.0</span>
                                </div>
                                <div className={styles.flexBetween}>
                                    <span className={styles.fontMedium}>Last Updated:</span>
                                    <span>January 21, 2024</span>
                                </div>
                                <div className={styles.flexBetween}>
                                    <span className={styles.fontMedium}>Database Size:</span>
                                    <span>127 MB</span>
                                </div>
                                <div className={styles.flexBetween}>
                                    <span className={styles.fontMedium}>Active Users:</span>
                                    <span>3</span>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </Layout>
    );
}