const fs = require('fs');
const html = fs.readFileSync('Downloads/FitHome-main/dashboard.html', 'utf8');
// Replace backticks with escaped version for template literal
const safe = html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
const tsx = `import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})
function DashboardPage() {
  return <div dangerouslySetInnerHTML={{ __html: \`${safe}\` }} />
}`;
fs.writeFileSync('Downloads/FitHome-main/src/routes/_protected/dashboard.tsx', tsx);
console.log('dashboard.tsx linked to dashboard.html');
