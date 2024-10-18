import React from 'react';
import { ScrollView, RefreshControl, ScrollViewProps } from 'react-native';

interface RefreshableScrollViewProps extends ScrollViewProps {
  onRefresh: () => void;
  refreshing: boolean;
}

const RefreshableScrollView: React.FC<RefreshableScrollViewProps> = ({
  children,
  onRefresh,
  refreshing,
  ...props
}) => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      {...props}
    >
      {children}
    </ScrollView>
  );
};

export default RefreshableScrollView;
