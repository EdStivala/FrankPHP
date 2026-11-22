export const TryIt = ({ title, subtitle, footerLabel, footerHref, children }) => {
  const panelRef = useRef(null);
  const [titles, setTitles] = useState([]);
  const [active, setActive] = useState(0);

  // Read the tab titles from the rendered panes, so this works however MDX wraps children.
  useEffect(() => {
    if (!panelRef.current) return;
    const panes = panelRef.current.querySelectorAll(".frank-tryit-pane");
    setTitles(Array.from(panes).map((p) => p.getAttribute("data-title")));
  }, []);

  useEffect(() => {
    if (!panelRef.current) return;
    const panes = panelRef.current.querySelectorAll(".frank-tryit-pane");
    panes.forEach((p, i) => {
      p.hidden = i !== active;
    });
  }, [active, titles]);

  return (
    <div className="frank-tryit not-prose">
      <div className="frank-tryit-head">
        <h2 className="frank-tryit-title">{title}</h2>
        {subtitle && <p className="frank-tryit-sub">{subtitle}</p>}
      </div>
      <div className="frank-tryit-body">
        <div className="frank-tryit-nav" role="tablist" aria-orientation="vertical">
          {titles.map((t, i) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={"frank-tryit-tab" + (i === active ? " is-active" : "")}
              onClick={() => setActive(i)}
            >
              <span className="frank-tryit-step">{i + 1}</span>
              {t}
            </button>
          ))}
          {footerHref && (
            <a className="frank-tryit-footer" href={footerHref}>
              {footerLabel} →
            </a>
          )}
        </div>
        <div ref={panelRef} className="frank-tryit-panel prose dark:prose-invert" role="tabpanel">
          {children}
        </div>
      </div>
    </div>
  );
};

export const TryItTab = ({ title, children }) => (
  <div className="frank-tryit-pane" data-title={title}>
    {children}
  </div>
);
