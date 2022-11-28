// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function SettingsPage() {
    return (
        <DashboardLayout>
            <DashboardNavbar action='settings' />
            <SoftBox mt={4}>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
}

export default SettingsPage;
