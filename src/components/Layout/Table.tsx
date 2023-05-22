import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from '@tremor/react';

interface Template {
  id: number;
  name: string;
  usecase: string;
  price: string;
}

export default function TemplatesTable({
  templates,
}: {
  templates: Template[];
}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Use Case</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {templates.map((template) => (
          <TableRow key={template.id}>
            <TableCell>{template.name}</TableCell>
            <TableCell>
              <Text>{template.usecase}</Text>
            </TableCell>
            <TableCell>
              <Text>{template.price}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
