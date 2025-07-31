import {Calendar, Eye, Plus, UserPlus, Users2} from "lucide-react";
import Layout from "../components/Layout";
import { Button } from "../components/ui/button";
import styles from "../styles/pages/Ministries.module.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import {Badge} from "../components/ui/badge.tsx";
import {Label} from "../components/ui/label.tsx";
import { Input } from "../components/ui/input.tsx";
import {Textarea} from "../components/ui/textarea.tsx";

export const Ministries = () => {
    const ministries = [
        {
            id: 1,
            name: "Youth Ministry",
            leader: "Pastor David",
            members: 35,
            description: "Empowering young people through Christ",
            meetingDay: "Fridays",
            meetingTime: "7:00 PM",
            status: "Active"
        },
        {
            id: 2,
            name: "Women's Fellowship",
            leader: "Elder Mary Johnson",
            members: 28,
            description: "Supporting women in their spiritual journey",
            meetingDay: "Tuesdays",
            meetingTime: "6:00 PM",
            status: "Active"
        },
        {
            id: 3,
            name: "Men's Brotherhood",
            leader: "Deacon James Wilson",
            members: 22,
            description: "Building strong Christian men",
            meetingDay: "Saturdays",
            meetingTime: "8:00 AM",
            status: "Active"
        },
        {
            id: 4,
            name: "Children's Ministry",
            leader: "Sister Sarah",
            members: 45,
            description: "Teaching children about God's love",
            meetingDay: "Sundays",
            meetingTime: "10:00 AM",
            status: "Active"
        },
        {
            id: 5,
            name: "Prayer Warriors",
            leader: "Elder Thomas",
            members: 18,
            description: "Dedicated intercessory prayer group",
            meetingDay: "Wednesdays",
            meetingTime: "6:00 AM",
            status: "Active"
        },
        {
            id: 6,
            name: "Choir Ministry",
            leader: "Minister Grace",
            members: 24,
            description: "Worship through song and music",
            meetingDay: "Thursdays",
            meetingTime: "7:30 PM",
            status: "Active"
        }
    ];

    const upcomingEvents = [
        {
            id: 1,
            ministry: "Youth Ministry",
            event: "Youth Camp Planning Meeting",
            date: "2024-01-25",
            time: "7:00 PM"
        },
        {
            id: 2,
            ministry: "Women's Fellowship",
            event: "Monthly Bible Study",
            date: "2024-01-23",
            time: "6:00 PM"
        },
        {
            id: 3,
            ministry: "Choir Ministry",
            event: "Easter Preparation Rehearsal",
            date: "2024-01-27",
            time: "7:30 PM"
        }
    ];

    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.headerText}>
                        <h1>Ministries</h1>
                        <p>Manage church ministries and groups</p>
                    </div>
                    <Button className="bg-gradient-divine shadow-divine">
                        <Plus className="mr-2 h-4 w-4" />
                        Create Ministry
                    </Button>
                </div>

                <Tabs defaultValue="ministries" className={styles.tabContainer}>
                    <TabsList className={styles.tabGrid}>
                        <TabsTrigger value="ministries">All Ministries</TabsTrigger>
                        <TabsTrigger value="events">Upcoming Events</TabsTrigger>
                        <TabsTrigger value="create">Create Ministry</TabsTrigger>
                    </TabsList>

                    <TabsContent value="ministries">
                        <div className={styles.ministryGrid}>
                            {ministries.map((ministry) => (
                                <Card key={ministry.id} className="shadow-peaceful">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className={styles.cardTitle}>{ministry.name}</CardTitle>
                                            <Badge>{ministry.status}</Badge>
                                        </div>
                                        <CardDescription>{ministry.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className={styles.ministryMeta}>
                                                <Users2 className={styles.ministryMetaIcon} />
                                                <span>{ministry.members} members</span>
                                            </div>
                                            <div className="space-y-2 text-sm">
                                                <p><strong>Leader:</strong> {ministry.leader}</p>
                                                <p><strong>Meetings:</strong> {ministry.meetingDay}s at {ministry.meetingTime}</p>
                                            </div>
                                            <div className={styles.buttonGroup}>
                                                <Button variant="outline" size="sm" className="flex-1">
                                                    <Eye className="h-4 w-4 mr-2" />
                                                    View Details
                                                </Button>
                                                <Button size="sm" className="flex-1">
                                                    <UserPlus className="h-4 w-4 mr-2" />
                                                    Add Member
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="events">
                        <Card className="shadow-peaceful">
                            <CardHeader>
                                <CardTitle className={styles.cardTitle}>Upcoming Ministry Events</CardTitle>
                                <CardDescription>Schedule and track ministry activities</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {upcomingEvents.map((event) => (
                                        <div key={event.id} className={styles.eventCard}>
                                            <div className={styles.eventDetails}>
                                                <div className={styles.eventTitle}>
                                                    <Calendar className="h-4 w-4 text-primary" />
                                                    <span>{event.event}</span>
                                                </div>
                                                <p className={styles.eventMinistry}>{event.ministry}</p>
                                                <p className={styles.eventDate}>{event.date} at {event.time}</p>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                View Details
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="create">
                        <Card className="shadow-peaceful">
                            <CardHeader>
                                <CardTitle className={styles.cardTitle}>Create New Ministry</CardTitle>
                                <CardDescription>Start a new ministry or group within the church</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className={styles.createFormGroup}>
                                    <div className={styles.createFormGrid}>
                                        <div>
                                            <Label htmlFor="name">Ministry Name</Label>
                                            <Input id="name" placeholder="Youth Ministry" />
                                        </div>
                                        <div>
                                            <Label htmlFor="leader">Ministry Leader</Label>
                                            <Input id="leader" placeholder="Pastor/Leader Name" />
                                        </div>
                                    </div>
                                    <div className={styles.createFormFull}>
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea id="description" placeholder="Describe the ministry's purpose and goals..." />
                                    </div>
                                    <div className={styles.createFormGrid}>
                                        <div>
                                            <Label htmlFor="meetingDay">Meeting Day</Label>
                                            <Input id="meetingDay" placeholder="e.g., Fridays" />
                                        </div>
                                        <div>
                                            <Label htmlFor="meetingTime">Meeting Time</Label>
                                            <Input id="meetingTime" placeholder="e.g., 7:00 PM" />
                                        </div>
                                    </div>
                                    <div className={styles.createFormFull}>
                                        <Label htmlFor="location">Meeting Location</Label>
                                        <Input id="location" placeholder="Fellowship Hall, Youth Center, etc." />
                                    </div>
                                    <Button className="bg-gradient-divine shadow-divine">
                                        Create Ministry
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </Layout>
    );
};