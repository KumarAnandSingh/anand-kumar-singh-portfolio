import { Column, Heading, Text } from "@once-ui-system/core";
import { Projects } from "@/components/work/Projects";
import { baseURL, work, person } from "@/resources";
import { Meta } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" horizontal="center" gap="l">
      <Column maxWidth="s" gap="16" horizontal="center" align="center">
        <Heading variant="display-strong-m">{work.title}</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {work.description}
        </Text>
      </Column>
      <Projects />
    </Column>
  );
}