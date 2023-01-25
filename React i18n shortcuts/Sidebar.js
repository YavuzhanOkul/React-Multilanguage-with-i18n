import { useTranslation } from 'react-i18next';
const getSections = (t) => [
  {
    title: t('General'),
    items: [
      {
        title: t('Overview'),
        path: '/dashboard',
        icon: <HomeIcon fontSize="small" />
      },
      {
        title: t('Analytics'),
        path: '/dashboard/analytics',
        icon: <ChartBarIcon fontSize="small" />
      },
      {
        title: t('Finance'),
        path: '/dashboard/finance',
        icon: <ChartPieIcon fontSize="small" />
      },
      {
        title: t('Logistics'),
        path: '/dashboard/logistics',
        icon: <TruckIcon fontSize="small" />,
        chip: <Chip
          color="secondary"
          label={(
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '600'
              }}
            >
              NEW
            </Typography>
          )}
          size="small"
        />
      },
      {
        title: t('Account'),
        path: '/dashboard/account',
        icon: <UserCircleIcon fontSize="small" />
      }
    ]
  }]