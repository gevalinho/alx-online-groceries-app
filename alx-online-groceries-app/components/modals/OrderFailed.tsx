import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";

type Props = {
  visible: boolean;
  onRetry: () => void;
  onClose: () => void;
};

export default function OrderFailed({ visible, onRetry, onClose }: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/40 justify-center items-center px-5">
        <View className="bg-white w-full rounded-3xl p-6 items-center">
          {/* Close button */}
          <View className="w-full items-start mb-4">
            <TouchableOpacity
              onPress={onClose}
              className="w-8 h-8 border border-gray-300 rounded-full items-center justify-center"
            >
              <Text className="text-lg text-gray-700">×</Text>
            </TouchableOpacity>
          </View>

          {/* Illustration or Emoji */}
          <View className="w-40 h-40 bg-[#EAF7EE] rounded-full items-center justify-center mb-6">
            <Text className="text-6xl">🛍️</Text>
          </View>

          {/* Title */}
          <Text className="text-center text-lg font-semibold text-[#1F232B] mb-2">
            Oops! Order Failed
          </Text>

          {/* Subtitle */}
          <Text className="text-center text-gray-500 mb-6">
            Something went terribly wrong.
          </Text>

          {/* Try Again */}
          <TouchableOpacity
            onPress={onRetry}
            className="w-full bg-[#34A853] py-4 rounded-2xl items-center mb-4"
          >
            <Text className="text-white font-semibold text-base">
              Please Try Again
            </Text>
          </TouchableOpacity>

          {/* Back to home */}
          <TouchableOpacity onPress={onClose} className="py-2">
            <Text className="text-[#1F232B] font-medium">Back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
