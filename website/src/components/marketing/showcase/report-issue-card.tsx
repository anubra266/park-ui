import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Select } from '~/components/ui/select'
import { Textarea } from '~/components/ui/textarea'

export const ReportIssueCard = () => {
  const frameworks = ['React', 'Solid', 'Vue']
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Report an issue</Card.Title>
        <Card.Description>Found a bug? Let us know so we can fix it.</Card.Description>
      </Card.Header>
      <Card.Body gap="4">
        <Stack gap="1.5">
          <Label htmlFor="title">Title</Label>
          <Input id="title" />
        </Stack>
        <Select.Root items={frameworks} positioning={{ sameWidth: true }} multiple>
          <Select.Label>Frameworks</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select a Framework" />
              <ChevronsUpDownIcon />
            </Select.Trigger>
          </Select.Control>
          <Select.Positioner>
            <Select.Content>
              {frameworks.map((framework) => (
                <Select.Item key={framework} item={framework}>
                  <Select.ItemText>{framework}</Select.ItemText>
                  <Select.ItemIndicator>
                    <CheckIcon />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Select.Root>
        <Stack gap="1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="A brief description of the issue" rows={3} />
        </Stack>
      </Card.Body>
      <Card.Footer gap="3">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </Card.Footer>
    </Card.Root>
  )
}
