export const Flow = ({ start, steps, end }) => {
  const items = [];
  if (start) items.push({ kind: "start", title: start });
  steps.forEach((s) => items.push({ kind: "step", ...s }));
  if (end) items.push({ kind: "end", ...end });

  return (
    <div className="frank-flow not-prose" role="figure">
      <ol className="frank-flow-steps" style={{ "--frank-flow-count": items.length }}>
        {items.map((s, i) => (
          <li key={i} className={"frank-flow-step frank-flow-step--" + s.kind}>
            {i > 0 && <span className="frank-flow-arrow" aria-hidden="true" />}
            <div className="frank-flow-card">
              {s.label && <span className="frank-flow-label">{s.label}</span>}
              <span className="frank-flow-title">{s.title}</span>
              {s.text && <span className="frank-flow-text">{s.text}</span>}
            </div>
            {s.stops && s.stops.length > 0 && (
              <ul className="frank-flow-stops">
                {s.stops.map((t, j) => (
                  <li key={j} className="frank-flow-stop">{t}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};
