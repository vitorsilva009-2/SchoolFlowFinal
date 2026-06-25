"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";
import CardPlanAdmin from "@/components/card-courses";
import CourseForm from "@/components/course-form";

const API = "http://localhost:5500/api/courses";

export default function CoursesAdmin() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState(null); // null = criar, objeto = editar
  const [form, setForm] = useState({
    name: "",
    teacher: "",
    description: "",
    
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null); // id do plano a deletar

  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    setLoading(true);
    const res = await fetch(API);
    const data = await res.json();
    setCourses(data);
    setLoading(false);
  }

  function openCreate() {
    setEditing(null);
    setForm({ name: "", teacher: "", description:'' });
    setError("");
    setSheetOpen(true);
  }

  function openEdit(courses) {
    setEditing(courses);
    setForm({
      name: courses.name,
      teacher: String(courses.teacher),
      description: String(courses.description),
   
    });
    setError("");
    setSheetOpen(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const body = {
      name: (form.name),
      teacher: (form.teacher),
      description: (form.description),
     
    };

    const res = await fetch(editing ? `${API}/${editing.id}` : API, {
      method: editing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });

    setSaving(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Erro ao salvar plano.");
      return;
    }

    setSheetOpen(false);
    fetchCourses();
  }

  async function handleDelete(id) {
    await fetch(`${API}/${id}`, { method: "DELETE", credentials: "include" });
    setConfirmDelete(null);
    fetchCourses();
  }

  return (
    <div className="flex  w-full flex-col gap-6 items-center">
      <div className="flex  items-center mt-10 ">
        <h1 className="text-7xl font-bold">Boletim</h1>
       
      </div>
      <div>
         <Button onClick={openCreate}>
          <Plus className="size-4 mr-2" />
          Adicionar Nota
        </Button>
      </div>

      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
      ) : courses.length === 0 ? (
        <p className="text-muted-foreground text-sm">
          Nenhum Curso cadastrado ainda.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CardPlanAdmin
              key={course.id}
              course={course}
              confirmDelete={confirmDelete}
              onEdit={openEdit}
              onDelete={handleDelete}
              onRequestDelete={setConfirmDelete}
              onCancelDelete={() => setConfirmDelete(null)}
            />
          ))}
        </div>
      )}

      <CourseForm
        editing={editing} 
        sheetOpen={sheetOpen} 
        setSheetOpen={setSheetOpen} 
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit} 
        saving={saving}
        error={error}
      />
    </div>
  );
}
