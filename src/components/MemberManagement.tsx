import {useState} from "react";
import styles from "../styles/MemberManagement.module.css";
import {Button} from "./ui/button";
import {Award, Calendar, Edit, Eye, Filter, Heart, Mail, MapPin, Phone, Plus, Search, Users} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "./ui/card";
import {Input} from "./ui/input";
import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar.tsx";
import {Badge} from "./ui/badge.tsx";

interface Member {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    joinDate: string;
    role: string;
    ministries: string[];
    attendance: number;
    status: "active" | "inactive";
    avatar?: string;
}

export const MemberManagement = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterRole, setFilterRole] = useState("all");

    // Sample member data
    const [members] = useState<Member[]>([
        {
            id: "1",
            name: "Sarah Johnson",
            email: "sarah.johnson@email.com",
            phone: "+1 (555) 123-4567",
            address: "123 Faith Street, Blessing City",
            joinDate: "2020-03-15",
            role: "Elder",
            ministries: ["Women's Ministry", "Prayer Team"],
            attendance: 95,
            status: 'active'
        },
        {
            id: "2",
            name: "Michael Davis",
            email: "michael.davis@email.com",
            phone: "+1 (555) 234-5678",
            address: "456 Grace Avenue, Blessing City",
            joinDate: "2019-07-22",
            role: "Choir Member",
            ministries: ["Choir", "Youth Ministry"],
            attendance: 88,
            status: 'active'
        },
        {
            id: "3",
            name: "Pastor Williams",
            email: "pastor.williams@gncc.org",
            phone: "+1 (555) 345-6789",
            address: "789 Divine Boulevard, Blessing City",
            joinDate: "2015-01-10",
            role: "Pastor",
            ministries: ["Leadership", "Pastoral Care"],
            attendance: 100,
            status: 'active'
        },
        {
            id: "4",
            name: "Emily Rodriguez",
            email: "emily.rodriguez@email.com",
            phone: "+1 (555) 456-7890",
            address: "321 Hope Lane, Blessing City",
            joinDate: "2021-09-08",
            role: "Usher",
            ministries: ["Ushering", "Children's Ministry"],
            attendance: 92,
            status: 'active'
        },
        {
            id: "5",
            name: "David Thompson",
            email: "david.thompson@email.com",
            phone: "+1 (555) 567-8901",
            address: "654 Peace Court, Blessing City",
            joinDate: "2018-11-30",
            role: "Regular Member",
            ministries: ["Men's Ministry"],
            attendance: 75,
            status: 'inactive'
        }
    ]);

    const filteredMembers = members.filter((member) => {
        const matchesSearch =
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole =
            filterRole === "all" || member.role.toLowerCase().includes(filterRole.toLowerCase());
        return matchesSearch && matchesRole;
    });

    const getRoleColor = (role: string) => {
        switch (role.toLowerCase()) {
            case "pastor":
                return styles.bgGold;
            case "elder":
                return styles.bgPrimaryLight;
            case "choir member":
                return styles.bgPrimaryGlow;
            case "usher":
                return styles.bgAccent;
            default:
                return styles.bgMuted;
        }
    };

    const getAttendanceColor = (attendance: number) => {
        if (attendance >= 90) return styles.attendanceHigh;
        if (attendance >= 75) return styles.attendanceMedium;
        return styles.attendanceLow;
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Member Management</h1>
                    <p className={styles.subtitle}>Manage church members, roles, and ministries</p>
                </div>

                <Button className={styles.addButton}>
                    <Plus className={styles.iconSmall}/> Add New Member
                </Button>
            </div>

            <Card className={styles.shadowPeaceful}>
                <CardContent className={styles.searchContainer}>
                    <div className={styles.searchRow}>
                        <div className={styles.searchInputWrapper}>
                            <Search className={styles.searchIcon}/>
                            <Input
                                placeholder="Search members by name or email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={styles.searchInput}
                            />
                        </div>

                        <div className={styles.filterWrapper}>
                            <select
                                value={filterRole}
                                onChange={(e) => setFilterRole(e.target.value)}
                                className={styles.selectFilter}
                            >
                                <option value="all">All Roles</option>
                                <option value="pastor">Pastor</option>
                                <option value="elder">Elder</option>
                                <option value="choir">Choir</option>
                                <option value="usher">Usher</option>
                                <option value="regular">Regular Member</option>
                            </select>

                            <Button variant="outline">
                                <Filter className={styles.iconSmall}/> More Filters
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className={styles.memberGrid}>
                {filteredMembers.map((member) => (
                    <Card key={member.id} className={styles.memberCard}>
                        <CardHeader className={styles.cardHeader}>
                            <div className={styles.memberHeader}>
                                <div className={styles.memberInfo}>
                                    <Avatar className={styles.avatar}>
                                        <AvatarImage src={member.avatar} alt={member.name}/>
                                        <AvatarFallback className={styles.avatarFallback}>
                                            {member.name.split(" ").map((n) => n[0]).join("")}
                                        </AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <CardTitle className={styles.memberName}>{member.name}</CardTitle>
                                        <Badge className={getRoleColor(member.role)}>{member.role}</Badge>
                                    </div>
                                </div>

                                <div
                                    className={`${styles.statusDot} ${
                                        member.status === "active" ? styles.active : styles.inactive
                                    }`}
                                />
                            </div>
                        </CardHeader>

                        <CardContent className={styles.memberContent}>
                            <div className={styles.contactInfo}>
                                <div className={styles.contactRow}><Mail className={styles.iconSmall}/>{member.email}
                                </div>
                                <div className={styles.contactRow}><Phone className={styles.iconSmall}/>{member.phone}
                                </div>
                                <div className={styles.contactRow}><MapPin
                                    className={styles.iconSmall}/>{member.address}</div>
                                <div className={styles.contactRow}><Calendar
                                    className={styles.iconSmall}/>Joined {new Date(member.joinDate).toLocaleDateString()}
                                </div>
                            </div>

                            <div>
                                <div className={styles.ministryHeader}><Users
                                    className={styles.iconSmall}/><span>Ministries</span></div>
                                <div className={styles.ministriesList}>
                                    {member.ministries.map((ministry, index) => (
                                        <Badge key={index} variant="outline" className={styles.ministryBadge}>
                                            {ministry}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.attendanceRow}>
                                <div className={styles.attendanceLabel}><Award className={styles.iconSmall}/>Attendance
                                </div>
                                <span className={`${styles.attendanceValue} ${getAttendanceColor(member.attendance)}`}>
                                  {member.attendance}%
                                </span>
                            </div>

                            <div className={styles.actionsRow}>
                                <Button variant="outline" size="sm" className={styles.actionBtn}><Eye
                                    className={styles.iconSmall}/>View</Button>
                                <Button variant="outline" size="sm" className={styles.actionBtn}><Edit
                                    className={styles.iconSmall}/>Edit</Button>
                                <Button variant="outline" size="sm" className={styles.actionBtn}><Heart
                                    className={styles.iconSmall}/></Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className={styles.shadowPeaceful}>
                <CardHeader>
                    <CardTitle className={styles.title}>Member Summary</CardTitle>
                    <CardDescription>Overview of church membership</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className={styles.summaryGrid}>
                        <div className={styles.summaryBlock}>
                            <div className={styles.summaryValue}>{members.length}</div>
                            <div className={styles.summaryLabel}>Total Members</div>
                        </div>
                        <div className={styles.summaryBlock}>
                            <div
                                className={styles.activeMembers}>{members.filter((m) => m.status === "active").length}</div>
                            <div className={styles.summaryLabel}>Active Members</div>
                        </div>
                        <div className={styles.summaryBlock}>
                            <div
                                className={styles.leadership}>{members.filter((m) => m.role === "Pastor" || m.role === "Elder").length}</div>
                            <div className={styles.summaryLabel}>Leadership</div>
                        </div>
                        <div className={styles.summaryBlock}>
                            <div className={styles.averageAttendance}>{
                                Math.round(members.reduce((acc, m) => acc + m.attendance, 0) / members.length)
                            }%
                            </div>
                            <div className={styles.summaryLabel}>Avg Attendance</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};