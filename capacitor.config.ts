import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.footysocial.guesswho',
  appName: 'Guess Who Football',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  ios: {
    contentInset: 'automatic',
    preferredContentMode: 'mobile',
    backgroundColor: '#f5c542'
  },
  android: {
    backgroundColor: '#f5c542'
  }
};

export default config;
