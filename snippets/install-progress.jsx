export const InstallProgress = ({ step }) => {
  const steps = [
    { label: "Database", title: "Create your MySQL database", href: "/getting-started/step-1" },
    { label: ".env", title: "Configure FrankPHP with .env", href: "/getting-started/step-2" },
    { label: "Folders", title: "Set up your server folders", href: "/getting-started/step-3" },
    { label: "Upload", title: "Upload FrankPHP", href: "/getting-started/step-4" },
    { label: "Subdomain", title: "Point your subdomain", href: "/getting-started/step-5" },
    { label: "Database setup", title: "Let FrankPHP initialise the database", href: "/getting-started/step-6" },
    { label: "Open", title: "Open FrankPHP in your browser", href: "/getting-started/step-7" },
    { label: "Sign in", title: "Sign in", href: "/getting-started/step-8" },
  ];
  const current = steps[step - 1];

  return (
    <nav className="frank-progress not-prose" aria-label="Installation progress">
      <div className="frank-progress-head">
        <span className="frank-progress-count">Step {step} of {steps.length}</span>
        <span className="frank-progress-title">{current.title}</span>
      </div>
      <ol className="frank-progress-track">
        {steps.map((s, i) => {
          const n = i + 1;
          const state = n < step ? "is-done" : n === step ? "is-current" : "is-todo";
          return (
            <li key={s.href} className={"frank-progress-item " + state}>
              <a href={s.href} aria-current={n === step ? "step" : undefined} title={"Step " + n + ": " + s.title}>
                <span className="frank-progress-bar" />
                <span className="frank-progress-label">
                  <span className="frank-progress-num">{n < step ? "✓" : n}</span>
                  <span className="frank-progress-text">{s.label}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
