import { Column, Spinner, Text } from "@once-ui-system/core";

export default function Loading() {
  return (
    <Column
      fillWidth
      fillHeight
      vertical="center"
      horizontal="center"
      gap="m"
      style={{ minHeight: "50vh" }}
    >
      <Spinner size="l" />
      <Text variant="body-default-s" onBackground="neutral-weak">
        Loading...
      </Text>
    </Column>
  );
}