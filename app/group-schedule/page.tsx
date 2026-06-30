import CallToAction from "@/components/CallToAction";
import {
  CANCELLED_CLASS_DATES,
  GROUP_SCHEDULE_MONTHS,
  GROUP_SCHEDULE_YEAR,
  PROGRAM_END_NOTES,
  WEEKLY_GROUP_CLASSES,
  type GroupClassTemplate,
} from "@/content/groupSchedule";

type DayClass = GroupClassTemplate & { cancelled?: boolean };

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDateKey(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getWeeksForMonth(year: number, month: number) {
  const firstDay = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  const weeks: (Date | null)[][] = [];
  let currentWeek: (Date | null)[] = [];

  for (let i = 0; i < firstDay.getDay(); i += 1) {
    currentWeek.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    currentWeek.push(new Date(year, month - 1, day));

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }

  return weeks;
}

function getClassesForDate(date: Date): DayClass[] {
  const dateKey = toDateKey(date);

  if (CANCELLED_CLASS_DATES.includes(dateKey)) {
    const scheduled = WEEKLY_GROUP_CLASSES.filter((session) => {
      if (session.dayOfWeek !== date.getDay()) return false;
      return date <= parseDateKey(session.endDate);
    });

    if (scheduled.length > 0) {
      return scheduled.map((session) => ({ ...session, cancelled: true }));
    }

    return [];
  }

  return WEEKLY_GROUP_CLASSES.filter((session) => {
    if (session.dayOfWeek !== date.getDay()) return false;
    return date <= parseDateKey(session.endDate);
  });
}

function MonthCalendar({
  year,
  month,
  label,
}: {
  year: number;
  month: number;
  label: string;
}) {
  const weeks = getWeeksForMonth(year, month);

  return (
    <section className="group-schedule-month">
      <h2 className="group-schedule-month__title">{label}</h2>

      <div className="group-schedule-weekdays" aria-hidden="true">
        {WEEKDAY_LABELS.map((day) => (
          <div key={day} className="group-schedule-weekdays__cell">
            {day}
          </div>
        ))}
      </div>

      <div className="group-schedule-weeks">
        {weeks.map((week, weekIndex) => (
          <div key={`${label}-week-${weekIndex}`} className="group-schedule-week">
            {week.map((date, dayIndex) => {
              if (!date) {
                return (
                  <div
                    key={`${label}-empty-${weekIndex}-${dayIndex}`}
                    className="group-schedule-day group-schedule-day--empty"
                    aria-hidden="true"
                  />
                );
              }

              const dateKey = toDateKey(date);
              const classes = getClassesForDate(date);
              const isCancelledDay = CANCELLED_CLASS_DATES.includes(dateKey);
              const dayLabel = date.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              });

              return (
                <div
                  key={dateKey}
                  className={`group-schedule-day${
                    classes.length > 0 ? " group-schedule-day--active" : ""
                  }${isCancelledDay ? " group-schedule-day--cancelled" : ""}`}
                >
                  <div className="group-schedule-day__date">
                    <span className="group-schedule-day__date-number">
                      {date.getDate()}
                    </span>
                    <span className="group-schedule-day__date-full">{dayLabel}</span>
                  </div>

                  {classes.length > 0 ? (
                    <div className="group-schedule-day__events">
                      {classes.map((session) => (
                        <div
                          key={`${toDateKey(date)}-${session.programKey}-${session.startTime}`}
                          className={`group-schedule-event group-schedule-event--${session.programKey}${
                            session.cancelled
                              ? " group-schedule-event--cancelled"
                              : ""
                          }`}
                        >
                          <p className="group-schedule-event__time">
                            {session.startTime} – {session.endTime}
                          </p>
                          <p className="group-schedule-event__title">
                            {session.title}
                            {session.cancelled ? " (No class)" : ""}
                          </p>
                          <p className="group-schedule-event__subtitle">
                            {session.subtitle}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : isCancelledDay ? (
                    <p className="group-schedule-day__note">No class</p>
                  ) : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function GroupSchedulePage() {
  return (
    <main className="group-schedule-page" style={pageStyle}>
      <section style={heroStyle}>
        <p style={eyebrowStyle}>Group Performance Training</p>
        <h1 style={titleStyle}>Summer Class Schedule</h1>
        <p style={subtitleStyle}>
          Weekly group classes for Summer Intensive and Summer Jam. Times are
          shown in Pacific Time.
        </p>
      </section>

      <section className="group-schedule-panel" style={panelStyle}>
        <h2 style={sectionTitleStyle}>Weekly class times</h2>

        <div className="group-schedule-weekly-grid" style={weeklyGridStyle}>
          {WEEKLY_GROUP_CLASSES.map((session) => (
            <div key={`${session.dayOfWeek}-${session.startTime}`} style={weeklyCardStyle}>
              <p style={weeklyDayStyle}>
                {WEEKDAY_LABELS[session.dayOfWeek]}
              </p>
              <p style={weeklyTimeStyle}>
                {session.startTime} – {session.endTime}
              </p>
              <p style={weeklyTitleStyle}>{session.title}</p>
              <p style={weeklySubtitleStyle}>{session.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {GROUP_SCHEDULE_MONTHS.map(({ month, label }) => (
        <MonthCalendar
          key={label}
          year={GROUP_SCHEDULE_YEAR}
          month={month}
          label={label}
        />
      ))}

      <section className="group-schedule-panel" style={panelStyle}>
        <h2 style={sectionTitleStyle}>Program notes</h2>

        <ul style={notesListStyle}>
          <li>
            <strong>No class:</strong> Friday, July 3 and July 6
          </li>
          {PROGRAM_END_NOTES.map((note) => (
            <li key={note.program}>
              <strong>{note.program} ends:</strong> {note.endDate} ({note.detail})
            </li>
          ))}
        </ul>
      </section>

      <div className="group-schedule-cta-row" style={ctaRowStyle}>
        <CallToAction href="/services/youth-performance-training" variant="secondary">
          Back to Group Performance Training
        </CallToAction>
        <CallToAction href="/intake" variant="primary">
          Reserve early access
        </CallToAction>
      </div>
    </main>
  );
}

const pageStyle: React.CSSProperties = {
  maxWidth: 980,
  margin: "0 auto",
  padding: "40px 16px 56px",
};

const heroStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "32px 20px",
  background:
    "radial-gradient(700px 320px at 10% 0%, rgba(31,111,235,0.08), transparent 60%), var(--panel)",
  boxShadow: "0 10px 30px var(--shadow)",
  textAlign: "center",
  marginBottom: 22,
};

const eyebrowStyle: React.CSSProperties = {
  margin: 0,
  fontWeight: 800,
  fontSize: 12,
  letterSpacing: 0.3,
  textTransform: "uppercase",
  color: "var(--accent)",
};

const titleStyle: React.CSSProperties = {
  margin: "10px 0",
  fontSize: 34,
  lineHeight: 1.12,
  color: "var(--navy)",
};

const subtitleStyle: React.CSSProperties = {
  margin: "0 auto",
  maxWidth: 720,
  lineHeight: 1.75,
  color: "var(--navy)",
  opacity: 0.88,
};

const panelStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: "18px 16px",
  background: "var(--panel)",
  boxShadow: "0 10px 26px var(--shadow)",
  marginBottom: 22,
};

const sectionTitleStyle: React.CSSProperties = {
  marginTop: 0,
  marginBottom: 14,
  fontSize: 18,
  color: "var(--navy)",
  textAlign: "center",
};

const weeklyGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 14,
};

const weeklyCardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 16,
  background: "var(--panel2)",
  textAlign: "center",
};

const weeklyDayStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "var(--accent)",
};

const weeklyTimeStyle: React.CSSProperties = {
  margin: "8px 0 6px",
  fontSize: 18,
  fontWeight: 800,
  color: "var(--navy)",
};

const weeklyTitleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: 16,
  fontWeight: 700,
  color: "var(--navy)",
};

const weeklySubtitleStyle: React.CSSProperties = {
  margin: "6px 0 0",
  fontSize: 14,
  lineHeight: 1.5,
  color: "var(--muted)",
};

const notesListStyle: React.CSSProperties = {
  margin: 0,
  paddingLeft: 20,
  lineHeight: 1.8,
  color: "var(--navy)",
};

const ctaRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: 8,
};
