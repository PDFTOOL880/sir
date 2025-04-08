import { Dashboard } from './Dashboard';
import { AuthGuard } from '@/components/AuthGuard';

export default function DashboardPage() {
  return (
    <AuthGuard>
      <Dashboard />
    </AuthGuard>
  );
}
