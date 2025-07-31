import {Button} from "./ui/button.tsx";
import styles from "../styles/Dashboard.module.css";
import {Card, CardContent, CardHeader} from "./ui/card.tsx";
import {Users, Plus, Calendar, DollarSign, TrendingUp} from "lucide-react";
import gnccLogo from "../assets/gnccLogo.jpg";

const stats = [
    {
        title: "Total Members",
        value: "347",
        description: "+12 this month",
        icon: Users,
        trend: "up"
    },
    {
        title: "This Week's Attendance",
        value: "284",
        description: "82% of members",
        icon: Calendar,
        trend: "up"
    },
    {
        title: "Monthly Tithes & Offerings",
        value: "$18,450",
        description: "+15% from last month",
        icon: DollarSign,
        trend: "up"
    },
    {
        title: "Active Ministries",
        value: "12",
        description: "All groups active",
        icon: TrendingUp,
        trend: "stable"
    }
];

const upcomingEvents = [
    {name: "Sunday Morning Service", date: "Today, 9:00 AM", type: "service"},
    {name: "Youth Bible Study", date: "Wed, 6:00 PM", type: "ministry"},
    {name: "Prayer Meeting", date: "Fri, 7:00 PM", type: "prayer"},
    {name: "Women's Fellowship", date: "Sat, 10:00 AM", type: "ministry"}
];

const recentActivities = [
    {action: "New member registered", user: "Sarah Johnson", time: "2 hours ago"},
    {action: "Tithe recorded", user: "Michael Davis", time: "4 hours ago"},
    {action: "Event created", user: "Pastor Williams", time: "1 day ago"},
    {action: "Ministry meeting scheduled", user: "Youth Leader", time: "2 days ago"}
];

export const Dashboard = () => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerText}>
                    <h1>Welcome to GNCC Management</h1>
                    <p>Gospel News Christian Church - Home of All Divine Blessings</p>
                </div>

                <div className={styles.headerRight}>
                    <img src={gnccLogo} alt="GNCC Logo" className={styles.logo}/>
                    <Button className={styles.quickAddButton}>
                        <Plus className={styles.plusIcon}/>
                        Quick Add
                    </Button>
                </div>
            </div>

            <div className={styles.statsGrid}>
                {stats.map((stat, i) => (
                    <Card key={i} className={styles.shadowPeaceful}>
                        <CardHeader>
                            <div className={styles.statIcon}>
                                <stat.icon/>
                            </div>
                            <h3>{stat.title}</h3>
                        </CardHeader>
                        <CardContent>
                            <p className={styles.statValue}>{stat.value}</p>
                            <p className={styles.statDescription}>{stat.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className={styles.mainGrid}>
                <Card className={`${styles.colSpan2} ${styles.shadowPeaceful}`}>
                    <CardHeader><h3>Upcoming Events</h3></CardHeader>
                    <CardContent>
                        <div className={styles.eventsList}>
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className={styles.eventItem}>
                                    <div className={styles.eventInfo}>
                                        <h4>{event.name}</h4>
                                        <p>{event.date}</p>
                                    </div>
                                    <div className={styles.eventActions}>
                                        <span
                                            className={`${styles.tag} ${
                                                event.type === "service"
                                                    ? styles.service
                                                    : event.type === "ministry"
                                                        ? styles.ministry
                                                        : styles.prayer
                                            }`}
                                        >
                                          {event.type}
                                        </span>
                                        <Button className={styles.ghostButton}> View </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className={styles.shadowPeaceful}>
                    <CardHeader><h3>Recent Activities</h3></CardHeader>
                    <CardContent>
                        <div className={styles.activitiesList}>
                            {recentActivities.map((activity, index) => (
                                <div key={index} className={styles.activityItem}>
                                    <div className={styles.activityDot}></div>
                                    <div className={styles.activityText}>
                                        <p>{activity.action}</p>
                                        <p>by {activity.user} • {activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className={styles.shadowPeaceful}>
                <CardHeader>
                    <h3>Quick Actions</h3>
                </CardHeader>
                <CardContent>
                    <div className={styles.quickGrid}>
                        <Button className={styles.quickButton}>
                            <Users className={styles.icon}/>
                            <span>Add Member</span>
                        </Button>
                        <Button className={styles.quickButton}>
                            <Users className={styles.icon}/>
                            <span>Schedule Event</span>
                        </Button>
                        <Button className={styles.quickButton}>
                            <Users className={styles.icon}/>
                            <span>Record Tithe</span>
                        </Button>
                        <Button className={styles.quickButton}>
                            <Users className={styles.icon}/>
                            <span>Send Message</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}