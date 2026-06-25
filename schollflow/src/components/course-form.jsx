// frontend\src\components\plan-form.jsx
import { Button } from "./ui/button";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

export default function CourseForm({
  editing,
  sheetOpen,
  setSheetOpen,
  form,
  setForm,
  error,
  saving,
  handleSubmit,
}) {
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{editing ? "Editar Curso" : "Novo Curso"}</SheetTitle>
          <SheetDescription>
            {editing
              ? "Altere os dados do plano."
              : "Preencha os dados para criar um novo plano."}
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 px-4">
          <FieldGroup>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <Field>
              <FieldLabel htmlFor="CoursesName">Nome do Curso</FieldLabel>
              <Input
                id="CoursesName"
                placeholder="Ex: Português"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Field>
            
            <Field>
              <FieldLabel htmlFor="CoursesTeacher">Professor</FieldLabel>
              <Input
                id="CoursesTeacher"
                placeholder="Ex: André Violin"
                required
                value={form.teacher}
                onChange={(e) => setForm({ ...form, teacher: e.target.value })}
              />
            </Field>
            
            <Field>
              <FieldLabel htmlFor="CoursesName">Descrição</FieldLabel>
              <Input
                
                id="CoursesName"
                placeholder="Ex: O curso abrange..."
                required
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </Field>
            
            <Field className="mt-4">
              <Button type="submit" disabled={saving}>
                {saving
                  ? "Salvando..."
                  : editing
                    ? "Salvar Alterações"
                    : "Adicionar Curso"}
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </SheetContent>
    </Sheet>
  );
}

