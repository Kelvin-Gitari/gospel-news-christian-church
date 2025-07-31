import {Calendar, Download, FileText, Music, Play, Upload, User, Video} from "lucide-react";
import Layout from "../components/Layout";
import {Button} from "../components/ui/button";
import styles from "../styles/pages/Media.module.css";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../components/ui/tabs";
import {Input} from "../components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../components/ui/select";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../components/ui/card";
import {Badge} from "../components/ui/badge.tsx";
import {Label} from "../components/ui/label.tsx";

const sermons = [
    {
        id: 1,
        title: "Walking in Faith",
        speaker: "Pastor Johnson",
        date: "2024-01-21",
        duration: "45:30",
        type: "video",
        views: 156,
        downloads: 23
    },
    {
        id: 2,
        title: "The Power of Prayer",
        speaker: "Elder Smith",
        date: "2024-01-14",
        duration: "38:15",
        type: "audio",
        views: 142,
        downloads: 31
    },
    {
        id: 3,
        title: "Living with Purpose",
        speaker: "Pastor Johnson",
        date: "2024-01-07",
        duration: "42:10",
        type: "video",
        views: 198,
        downloads: 45
    }
];

const musicLibrary = [
    {
        id: 1,
        title: "Amazing Grace",
        artist: "Church Choir",
        date: "2024-01-15",
        duration: "4:30",
        category: "Hymn"
    },
    {
        id: 2,
        title: "How Great Thou Art",
        artist: "Worship Team",
        date: "2024-01-10",
        duration: "5:15",
        category: "Worship"
    },
    {
        id: 3,
        title: "Blessed Assurance",
        artist: "Youth Choir",
        date: "2024-01-05",
        duration: "3:45",
        category: "Hymn"
    }
];

const documents = [
    {
        id: 1,
        title: "Church Constitution",
        type: "PDF",
        size: "2.3 MB",
        date: "2024-01-01",
        downloads: 89
    },
    {
        id: 2,
        title: "Annual Budget 2024",
        type: "PDF",
        size: "1.8 MB",
        date: "2023-12-30",
        downloads: 67
    },
    {
        id: 3,
        title: "Ministry Guidelines",
        type: "DOCX",
        size: "856 KB",
        date: "2023-12-25",
        downloads: 112
    }
];

export const Media = () => {
    return (
        <Layout>
            <div className={styles.pageSpacing}>
                <div className={styles.headerRow}>
                    <div>
                        <h1 className={styles.title}>Media Archive</h1>
                        <p className={styles.subtitle}>Manage sermons, music, and church documents</p>
                    </div>
                    <Button className={styles.buttonUpload}>
                        <Upload className={styles.iconLeft}/>
                        Upload Media
                    </Button>
                </div>

                <Tabs defaultValue="sermons" className={styles.tabsSpacing}>
                    <TabsList className={styles.tabsList}>
                        <TabsTrigger value="sermons">Sermons</TabsTrigger>
                        <TabsTrigger value="music">Music</TabsTrigger>
                        <TabsTrigger value="documents">Documents</TabsTrigger>
                        <TabsTrigger value="upload">Upload</TabsTrigger>
                    </TabsList>

                    <TabsContent value="sermons" className={styles.tabContentSpacing}>
                        <div className={styles.filterRow}>
                            <Input placeholder="Search sermons..." className={styles.inputSm}/>
                            <Select>
                                <SelectTrigger className={styles.selectSm}>
                                    <SelectValue placeholder="Filter by speaker"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Speakers</SelectItem>
                                    <SelectItem value="pastor-johnson">Pastor Johnson</SelectItem>
                                    <SelectItem value="elder-smith">Elder Smith</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={styles.gridCards}>
                            {sermons.map((sermon) => (
                                <Card key={sermon.id} className={styles.shadowPeaceful}>
                                    <CardHeader>
                                        <div className={styles.cardHeaderRow}>
                                            <div className={styles.cardHeaderLeft}>
                                                <div className={styles.iconCircle}>
                                                    {sermon.type === "video" ? (
                                                        <Video className={styles.iconPrimary}/>
                                                    ) : (
                                                        <Music className={styles.iconPrimary}/>
                                                    )}
                                                </div>
                                                <div>
                                                    <CardTitle className={styles.cardTitle}>{sermon.title}</CardTitle>
                                                    <div className={styles.cardMeta}>
                                                      <span className={styles.cardMetaItem}>
                                                        <User className={styles.iconMeta}/>
                                                          {sermon.speaker}
                                                      </span>
                                                        <span className={styles.cardMetaItem}>
                                                        <Calendar className={styles.iconMeta}/>
                                                            {sermon.date}
                                                      </span>
                                                        <span>{sermon.duration}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Badge variant={sermon.type === "video" ? "default" : "secondary"}>
                                                {sermon.type}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className={styles.cardFooterRow}>
                                            <div className={styles.cardStats}>
                                                <span>{sermon.views} views</span>
                                                <span>{sermon.downloads} downloads</span>
                                            </div>
                                            <div className={styles.cardActions}>
                                                <Button variant="outline" size="sm">
                                                    <Play className={styles.iconLeft}/>
                                                    Play
                                                </Button>
                                                <Button variant="outline" size="sm">
                                                    <Download className={styles.iconLeft}/>
                                                    Download
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="music" className={styles.tabContentSpacing}>
                        <div className={styles.filterRow}>
                            <Input placeholder="Search music..." className={styles.inputSm}/>
                            <Select>
                                <SelectTrigger className={styles.selectSm}>
                                    <SelectValue placeholder="Filter by category"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    <SelectItem value="hymn">Hymns</SelectItem>
                                    <SelectItem value="worship">Worship</SelectItem>
                                    <SelectItem value="contemporary">Contemporary</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={styles.gridCards}>
                            {musicLibrary.map((music) => (
                                <Card key={music.id} className={styles.shadowPeaceful}>
                                    <CardContent className={styles.cardContentPadding}>
                                        <div className={styles.cardFooterRow}>
                                            <div className={styles.cardHeaderLeft}>
                                                <div className={styles.iconCircle}>
                                                    <Music className={styles.iconPrimary}/>
                                                </div>
                                                <div>
                                                    <h3 className={styles.cardTitle}>{music.title}</h3>
                                                    <div className={styles.cardMeta}>
                                                        <span>{music.artist}</span>
                                                        <span>{music.date}</span>
                                                        <span>{music.duration}</span>
                                                        <Badge variant="outline">{music.category}</Badge>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.cardActions}>
                                                <Button variant="outline" size="sm">
                                                    <Play className={styles.iconLeft}/>
                                                    Play
                                                </Button>
                                                <Button variant="outline" size="sm">
                                                    <Download className={styles.iconLeft}/>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="documents" className={styles.tabContentSpacing}>
                        <div className={styles.filterRow}>
                            <Input placeholder="Search documents..." className={styles.inputSm}/>
                            <Select>
                                <SelectTrigger className={styles.selectSm}>
                                    <SelectValue placeholder="Filter by type"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    <SelectItem value="pdf">PDF</SelectItem>
                                    <SelectItem value="docx">Word</SelectItem>
                                    <SelectItem value="xlsx">Excel</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={styles.gridCards}>
                            {documents.map((doc) => (
                                <Card key={doc.id} className={styles.shadowPeaceful}>
                                    <CardContent className={styles.cardContentPadding}>
                                        <div className={styles.cardFooterRow}>
                                            <div className={styles.cardHeaderLeft}>
                                                <div className={styles.iconCircle}>
                                                    <FileText className={styles.iconPrimary}/>
                                                </div>
                                                <div>
                                                    <h3 className={styles.cardTitle}>{doc.title}</h3>
                                                    <div className={styles.cardMeta}>
                                                        <span>{doc.type}</span>
                                                        <span>{doc.size}</span>
                                                        <span>{doc.date}</span>
                                                        <span>{doc.downloads} downloads</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.cardActions}>
                                                <Button variant="outline" size="sm">
                                                    View
                                                </Button>
                                                <Button variant="outline" size="sm">
                                                    <Download className={styles.iconLeft}/>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="upload" className={styles.tabContentSpacing}>
                        <Card className={styles.shadowPeaceful}>
                            <CardHeader>
                                <CardTitle className={styles.cardTitle}>Upload New Media</CardTitle>
                                <CardDescription>Add sermons, music, or documents to the archive</CardDescription>
                            </CardHeader>
                            <CardContent className={styles.uploadContentSpacing}>
                                <div className={styles.gridForm}>
                                    <div>
                                        <Label htmlFor="media-type">Media Type</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select type"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="sermon-video">Sermon Video</SelectItem>
                                                <SelectItem value="sermon-audio">Sermon Audio</SelectItem>
                                                <SelectItem value="music">Music</SelectItem>
                                                <SelectItem value="document">Document</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label htmlFor="title">Title</Label>
                                        <Input id="title" placeholder="Media title"/>
                                    </div>
                                </div>
                                <div className={styles.gridForm}>
                                    <div>
                                        <Label htmlFor="speaker">Speaker/Artist</Label>
                                        <Input id="speaker" placeholder="Name"/>
                                    </div>
                                    <div>
                                        <Label htmlFor="date">Date</Label>
                                        <Input type="date" id="date"/>
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="description">Description</Label>
                                    <Input id="description" placeholder="Brief description..."/>
                                </div>
                                <div className={styles.uploadDropZone}>
                                    <Upload className={styles.uploadDropIcon}/>
                                    <h3 className={styles.uploadDropTitle}>Drop files here or click to upload</h3>
                                    <p className={styles.uploadDropText}>Supports video, audio, and document files</p>
                                    <Button variant="outline">
                                        <Upload className={styles.iconLeft}/>
                                        Choose Files
                                    </Button>
                                </div>
                                <Button className={styles.buttonUploadFull}>
                                    Upload Media
                                </Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </Layout>
    );
}