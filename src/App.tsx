import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Index} from "./pages/Index.tsx";
import {Members} from "./pages/Members.tsx";
import {Services} from "./pages/Services.tsx";
import {Finance} from "./pages/Finance.tsx";
import {Ministries} from "./pages/Ministries.tsx";
import {Communication} from "./pages/Communication.tsx";
import {Reports} from "./pages/Reports.tsx";
import {Media} from "./pages/Media.tsx";
import {Settings} from "./pages/Settings.tsx";
import {NotFound} from "./pages/NotFound.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/members" element={<Members/>}/>
                <Route path="/services" element={<Services />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/ministries" element={<Ministries />} />
                <Route path="/communication" element={<Communication />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/media" element={<Media />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
