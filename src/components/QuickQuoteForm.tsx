import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const QuickQuoteForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const apiBase = import.meta.env.VITE_API_URL ?? "";
    const url = `${apiBase}/send-quick-quote`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 30000);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (!res.ok) {
        let msg = "Send failed";
        try {
          const j = await res.json();
          if (j?.error) msg = j.error;
        } catch {
          // ignore
        }
        throw new Error(msg);
      }
      console.log("[QuickQuoteForm] Submit success", { name, phone });
      toast({
        title: "Request Received!",
        description: "We'll call you shortly to discuss your project.",
      });
      setName("");
      setPhone("");
    } catch (err: unknown) {
      clearTimeout(timer);
      console.log("[QuickQuoteForm] Submit failed", err);
      const message =
        err instanceof Error &&
        (err.name === "AbortError" || err.message?.includes("timed out"))
          ? "Request timed out. Please try again."
          : err instanceof Error
            ? err.message
            : "Sorry, we couldn't send. Please try again or call (310) 498-0110.";
      toast({
        title: "Couldn't send",
        description: message,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="flex-1"
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        className="flex-1"
      />
      <Button type="submit" size="lg" className="magnetic" disabled={submitting}>
        {submitting ? "Sending…" : "Get Started"}{" "}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.form>
  );
};

export default QuickQuoteForm;
