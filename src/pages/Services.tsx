import {Button} from "../components/ui/button";
import {Card, CardContent, CardDescription,  CardHeader, CardTitle} from "../components/ui/card";
import {Label} from "../components/ui/label";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../components/ui/tabs";
import {Textarea} from "../components/ui/textarea";
import {Input} from "../components/ui/input.tsx";
import Layout from "../components/Layout";
import {Calendar, Clock, Edit, MapPin, Plus, Users} from "lucide-react";
import {Badge} from "../components/ui/badge.tsx";
import styles from "../styles/pages/Services.module.css";

const upcomingServices = [
    {
        id: 1,
        title: "Sunday Worship Service",
        date: "2024-01-21",
        time: "09:00 AM",
        location: "Main Sanctuary",
        attendees: 150,
        preacher: "Pastor Johnson",
        status: "Scheduled"
    },
    {
        id: 2,
        title: "Midweek Bible Study",
        date: "2024-01-24",
        time: "07:00 PM",
        location: "Fellowship Hall",
        attendees: 45,
        preacher: "Elder Smith",
        status: "Scheduled"
    },
    {
        id: 3,
        title: "Youth Fellowship",
        date: "2024-01-26",
        time: "06:00 PM",
        location: "Youth Center",
        attendees: 32,
        preacher: "Pastor Davis",
        status: "Confirmed"
    }
];

const recentEvents = [
    {
        id: 1,
        title: "New Year Prayer Service",
        date: "2024-01-01",
        attendance: 120,
        status: "Completed"
    },
    {
        id: 2,
        title: "Sunday Service",
        date: "2024-01-14",
        attendance: 145,
        status: "Completed"
    }
];

export const Services = () => {
    return (
        <Layout>
            <div className={styles.pageWrapper}>
                <div className={styles.headerRow}>
                    <div>
                        <h1 className={styles.pageTitle}>Services & Events</h1>
                        <p className={styles.pageSubtitle}>
                            Manage church services, events, and attendance
                        </p>
                    </div>
                    <Button className={styles.addButton}>
                        <Plus className={styles.iconSmall} />
                        Add Service
                    </Button>
                </div>

                <Tabs defaultValue="services" className={styles.tabsRoot}>
                    <TabsList className={styles.tabsList}>
                        <TabsTrigger value="services">Upcoming Services</TabsTrigger>
                        <TabsTrigger value="events">Past Events</TabsTrigger>
                        <TabsTrigger value="create">Create New</TabsTrigger>
                    </TabsList>

                    <TabsContent value="services" className={styles.tabContent}>
                        <div className={styles.cardGrid}>
                            {upcomingServices.map((service) => (
                                <Card key={service.id} className={styles.cardShadow}>
                                    <CardHeader>
                                        <div className={styles.cardHeaderRow}>
                                            <CardTitle className={styles.serviceTitle}>{service.title}</CardTitle>
                                            <Badge variant={service.status === "Confirmed" ? "default" : "secondary"}>
                                                {service.status}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className={styles.infoGrid}>
                                            <div className={styles.infoItem}>
                                                <Calendar className={styles.icon} />
                                                <span>{service.date}</span>
                                            </div>
                                            <div className={styles.infoItem}>
                                                <Clock className={styles.icon} />
                                                <span>{service.time}</span>
                                            </div>
                                            <div className={styles.infoItem}>
                                                <MapPin className={styles.icon} />
                                                <span>{service.location}</span>
                                            </div>
                                            <div className={styles.infoItem}>
                                                <Users className={styles.icon} />
                                                <span>{service.attendees} expected</span>
                                            </div>
                                        </div>
                                        <div className={styles.footerRow}>
                                            <p className={styles.footerText}>Preacher: {service.preacher}</p>
                                            <Button variant="outline" size="sm">
                                                <Edit className={styles.iconSmall} />
                                                Edit
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="events" className={styles.tabContent}>
                        <div className={styles.cardGrid}>
                            {recentEvents.map((event) => (
                                <Card key={event.id} className={styles.cardShadow}>
                                    <CardHeader>
                                        <div className={styles.cardHeaderRow}>
                                            <CardTitle className={styles.serviceTitle}>{event.title}</CardTitle>
                                            <Badge variant="outline">{event.status}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className={styles.eventRow}>
                                            <div className={styles.infoItem}>
                                                <Calendar className={styles.icon} />
                                                <span>{event.date}</span>
                                            </div>
                                            <div className={styles.infoItem}>
                                                <Users className={styles.icon} />
                                                <span>{event.attendance} attended</span>
                                            </div>
                                            <Button variant="outline" size="sm">
                                                View Details
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="create" className={styles.tabContent}>
                        <Card className={styles.cardShadow}>
                            <CardHeader>
                                <CardTitle className={styles.serviceTitle}>Create New Service/Event</CardTitle>
                                <CardDescription>Schedule a new service or event for the church</CardDescription>
                            </CardHeader>
                            <CardContent className={styles.formContent}>
                                <div className={styles.formRow2}>
                                    <div>
                                        <Label htmlFor="title">Service/Event Title</Label>
                                        <Input id="title" placeholder="Sunday Worship Service" />
                                    </div>
                                    <div>
                                        <Label htmlFor="type">Type</Label>
                                        <Input id="type" placeholder="Service, Event, Study" />
                                    </div>
                                </div>
                                <div className={styles.formRow3}>
                                    <div>
                                        <Label htmlFor="date">Date</Label>
                                        <Input type="date" id="date" />
                                    </div>
                                    <div>
                                        <Label htmlFor="time">Time</Label>
                                        <Input type="time" id="time" />
                                    </div>
                                    <div>
                                        <Label htmlFor="location">Location</Label>
                                        <Input id="location" placeholder="Main Sanctuary" />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="preacher">Preacher/Leader</Label>
                                    <Input id="preacher" placeholder="Pastor Name" />
                                </div>
                                <div>
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea id="description" placeholder="Service description..." />
                                </div>
                                <Button className={styles.submitButton}>Create Service/Event</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </Layout>
    );
}