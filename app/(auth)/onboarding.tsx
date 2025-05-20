import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view';

const { width } = Dimensions.get('window');

interface OnboardingScreenProps {
  headline: string;
  subheadline?: string;
  bodyCopy?: string;
  featureHighlight?: string;
  ctaButtonText: string;
  secondaryText?: string;
  image?: any; // Replace with proper image type if needed
  onCtaPress: () => void;
  onSecondaryPress?: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({
  headline,
  subheadline,
  bodyCopy,
  featureHighlight,
  ctaButtonText,
  secondaryText,
  image,
  onCtaPress,
  onSecondaryPress,
}) => {
  return (
    <View style={styles.page}>
      {image && <Image source={image} style={styles.image} />}
      <Text style={styles.headline}>{headline}</Text>
      {subheadline && <Text style={styles.subheadline}>{subheadline}</Text>}
      {bodyCopy && <Text style={styles.bodyCopy}>{bodyCopy}</Text>}
      {featureHighlight && <Text style={styles.featureHighlight}>{featureHighlight}</Text>}
      <TouchableOpacity style={styles.ctaButton} onPress={onCtaPress}>
        <Text style={styles.ctaButtonText}>{ctaButtonText}</Text>
      </TouchableOpacity>
      {secondaryText && onSecondaryPress && (
        <TouchableOpacity onPress={onSecondaryPress}>
          <Text style={styles.secondaryText}>{secondaryText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const OnboardingFlow: React.FC = () => {
  const handleGetStarted = () => {
    console.log('Get Started pressed');
    // Navigate to the next screen or onboarding step
  };

  const handleSignIn = () => {
    console.log('Sign In pressed');
    // Navigate to the Sign In screen
  };

  const handleNext = () => {
    console.log('Next pressed');
    // Navigate to the next onboarding screen
  };

  const handleCreateAccount = () => {
    console.log('Create Account pressed');
    // Navigate to the Create Account screen or the main app
  };

  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      {/* Welcome Screen */}
      <View key="1">
        <OnboardingScreen
          headline="Remember Everything, Think Better"
          subheadline="Mem0 combines your memories with AI to enhance how you think and remember."
          ctaButtonText="Get Started"
          secondaryText="Already have an account? Sign In"
          onCtaPress={handleGetStarted}
          onSecondaryPress={handleSignIn}
          // Add image={require('./path/to/welcome-image.png')} if you have an image
        />
      </View>

      {/* Onboarding Screen 1: Memory Capture */}
      <View key="2">
        <OnboardingScreen
          headline="Save What Matters"
          bodyCopy="Mem0 makes it easy to capture thoughts, ideas, and moments. Text, images, voice memos—we store it all securely in your personal memory bank."
          featureHighlight='"I saved a conversation with a client about their project requirements, and Mem0 reminded me about key details I would have forgotten." - Alex, Product Manager'
          ctaButtonText="Next"
          onCtaPress={handleNext}
          // Add image={require('./path/to/capture-image.png')} if you have an image
        />
      </View>

      {/* Onboarding Screen 2: AI Assistant */}
      <View key="3">
        <OnboardingScreen
          headline="Your Thinking Partner"
          bodyCopy="Chat with our AI that knows your memories. Ask questions about things you've saved, explore connections, or get help processing complex ideas."
          featureHighlight='Type "What was that book recommendation from last week?" and watch as Mem0 finds exactly what you\jounore looking for.'
          ctaButtonText="Next"
          onCtaPress={handleNext}
          // Add image={require('./path/to/assistant-image.png')} if you have an image
        />
      </View>

      {/* Onboarding Screen 3: Memory Intelligence */}
      <View key="4">
        <OnboardingScreen
          headline="Connections You Didn't See Coming"
          bodyCopy="Mem0 learns how you think and surfaces relevant memories at just the right time. No more forgetting important details or missing valuable insights."
          featureHighlight='Mem0 might say: "This new project seems related to the research you saved 3 months ago. Would you like to review it?"'
          ctaButtonText="Create Account"
          onCtaPress={handleCreateAccount}
          // Add image={require('./path/to/intelligence-image.png')} if you have an image
        />
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff', // Adjust background color as needed
  },
  image: {
    width: width * 0.8,
    height: width * 0.6,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  headline: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333', // Adjust text color as needed
  },
  subheadline: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666', // Adjust text color as needed
  },
  bodyCopy: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555', // Adjust text color as needed
  },
  featureHighlight: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 30,
    color: '#777', // Adjust text color as needed
  },
  ctaButton: {
    backgroundColor: '#007bff', // Adjust button color as needed
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryText: {
    fontSize: 16,
    color: '#007bff', // Adjust text color as needed
  },
});

export default OnboardingFlow;