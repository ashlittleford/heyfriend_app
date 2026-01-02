from playwright.sync_api import sync_playwright

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Login Page Verification
        page.goto("http://localhost:5173")
        page.screenshot(path="verification/1_login_page.png")
        print("Captured Login Page")

        # 2. Member Login and Profile Verification
        page.fill("input[type=email]", "member@uca.org.au")
        page.fill("input[type=password]", "password")
        page.click("button[type=submit]")
        page.wait_for_timeout(2000) # Wait for navigation and rendering
        page.screenshot(path="verification/2_member_profile.png")
        print("Captured Member Profile")

        # Logout
        page.click("button:has-text('Logout')")
        page.wait_for_timeout(1000)

        # 3. Admin Login and Dashboard Verification
        page.fill("input[type=email]", "admin@uca.org.au")
        page.fill("input[type=password]", "admin")
        page.click("button[type=submit]")
        page.wait_for_timeout(2000)
        page.screenshot(path="verification/3_admin_dashboard.png")
        print("Captured Admin Dashboard")

        # 4. Admin Edit Verification
        # Click on the edit button for the first user
        page.click("button[title='Edit']")
        page.wait_for_timeout(1000)
        page.screenshot(path="verification/4_admin_edit.png")
        print("Captured Admin Edit Page")

        browser.close()

if __name__ == "__main__":
    verify_frontend()
