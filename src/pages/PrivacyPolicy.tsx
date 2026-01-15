import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: 2025-11-20</p>

        <section className="prose max-w-none">
          <p>
            Fiesta IT Services ("the App") provides wallpaper images featuring Fiesta
            IT Services for personal use. This Privacy Policy explains what information the App
            collects, how it is used, and your choices.
          </p>

          <h2>Information We Do Not Collect</h2>
          <p>
            The App does not collect any personally identifiable information (such as name,
            email address, or phone number) by itself. You can use the App without creating an
            account or providing personal information.
          </p>

          <h2>Anonymous Analytics and Crash Reports</h2>
          <p>
            The App may use anonymous analytics or crash-reporting services to help us
            understand usage and improve stability. These tools collect non-personal data such
            as app version, device model, operating system, and anonymous identifiers. This data
            cannot be used to identify you personally.
          </p>

          <h2>Advertisements and Third-Party Services</h2>
          <p>
            The App may display ads from third‑party advertising networks (for example:
            Google AdMob). These networks may collect information about your device and
            interactions with ads to serve relevant ads. We do not control how ad networks
            handle data; please refer to each ad provider's privacy policy for details.
          </p>

          <h2>Permissions</h2>
          <p>
            The App may request permission to access device storage when you save a wallpaper
            to your device. Storage permissions are used solely to save images you choose and
            are not used to collect personal data.
          </p>

          <h2>Children</h2>
          <p>
            The App is not intended for users under 13. We do not knowingly collect information
            from children under 13. If you believe we have collected personal information from
            a child, please contact us and we will take steps to remove it.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make material changes we
            will update the "Last updated" date above. Continued use of the App after changes
            implies acceptance of the updated policy.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this policy, contact us at: <strong>your-email@example.com</strong>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
