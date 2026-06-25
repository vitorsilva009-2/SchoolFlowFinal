// frontend\src\components\card-plan-admin.jsx
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function CardCourses({
  course,
  confirmDelete,
  onEdit,
  onDelete,
  onRequestDelete,
  onCancelDelete,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>
          {course.teacher}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground flex flex-col gap-1">
       {course.description}
      </CardContent>
      <CardFooter className="flex gap-2">
        {confirmDelete === course.id ? (
          <>
            <span className="text-sm text-destructive flex-1">
              Confirmar exclusão?
            </span>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(course.id)}
            >
              Sim
            </Button>
            <Button size="sm" variant="outline" onClick={onCancelDelete}>
              Não
            </Button>
          </>
        ) : (
          <>
            <Button size="sm" variant="outline" onClick={() => onEdit(course)}>
              <Pencil className="size-3.5 mr-1" /> Editar
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onRequestDelete(course.id)}
            >
              <Trash2 className="size-3.5 mr-1" /> Excluir
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
