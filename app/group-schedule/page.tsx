import CallToAction from "@/components/CallToAction";
import ClassPaymentOptions from "@/components/ClassPaymentOptions";
import { getGymdeskBookUrl } from "@/content/gymdesk";
import {
  CANCELLED_CLASS_DATES,
  GROUP_SCHEDULE_MONTHS,
  GROUP_SCHEDULE_YEAR,
  PROGRAM_NOTES,
  WEEKLY_GROUP_CLASSES,
  type GroupClassTemplate,
} from "@/content/groupSchedule";
import {
  SCHOOL_YEAR_FLYER,
  SCHOOL_YEAR_SESSIONS,
  getDropInCtas,
  getSessionCtas,
} from "@/content/schoolYearGroupClasses";

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

function isScheduledOn(session: GroupClassTemplate, date: Date) {
  if (session.dayOfWeek !== date.getDay()) return false;
  if (date < parseDateKey(session.startDate)) return false;
  if (date > parseDateKey(session.endDate)) return false;
  return true;
}

function getClassesForDate(date: Date): DayClass[] {
  const dateKey = toDateKey(date);
  const scheduled = WEEKLY_GROUP_CLASSES.filter((session) =>
    isScheduledOn(session, date)
  );

  if (CANCELLED_CLASS_DATES.includes(dateKey)) {
    if (scheduled.length > 0) {
      return scheduled.map((session) => ({ ...session, cancelled: true }));
    }

    return [];
  }

  return scheduled;
}

function getActiveClassDatesForMonth(year: number, month: number) {
  const daysInMonth = new Date(year, month, 0).getDate();
  const dates: Date[] = [];

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month - 1, day);
    const classes = getClassesForDate(date).filter((session) => !session.cancelled);

    if (classes.length > 0) {
      dates.push(date);
    }
  }

  return dates;
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
                          {!session.cancelled ? (
                            <a
                              href={getGymdeskBookUrl({
                                classId: session.id,
                                date: dateKey,
                              })}
                              className="group-schedule-event__dropin"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Book
                            </a>
                          ) : null}
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

function SeptemberDropInDates() {
  const dates = getActiveClassDatesForMonth(GROUP_SCHEDULE_YEAR, 9);

  if (dates.length === 0) return null;

  return (
    <section className="group-schedule-panel" style={panelStyle}>
      <h2 style={sectionTitleStyle}>September drop-in dates</h2>
      <p style={dropInIntroStyle}>
        These Sundays match Gymdesk. Pay {SCHOOL_YEAR_FLYER.dropInPrice} per
        drop-in, or{" "}
        <a href="/schedule#book-sessions">
          pick several dates and check out
        </a>{" "}
        on the Book page. There is no monthly charge unless you choose a month
        commitment.
      </p>

      <div className="september-dropin-dates">
        {dates.map((date) => {
          const dateKey = toDateKey(date);
          const classes = getClassesForDate(date).filter(
            (session) => !session.cancelled
          );
          const dateLabel = date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          });

          return (
            <article key={dateKey} style={dropInDateCardStyle}>
              <h3 style={dropInDateTitleStyle}>{dateLabel}</h3>
              <div className="september-dropin-dates__sessions">
                {classes.map((session) => (
                  <div
                    key={`${dateKey}-${session.programKey}-${session.startTime}`}
                    style={dropInSessionRowStyle}
                  >
                    <div>
                      <p style={weeklyTitleStyle}>{session.title}</p>
                      <p style={weeklySubtitleStyle}>
                        {session.subtitle} · {session.startTime} – {session.endTime}
                      </p>
                    </div>
                    <CallToAction
                      href={getGymdeskBookUrl({
                        classId: session.id,
                        date: dateKey,
                      })}
                      variant="primary"
                    >
                      Book in Gymdesk
                    </CallToAction>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function GroupSchedulePage() {
  return (
    <main className="group-schedule-page" style={pageStyle}>
      <section style={heroStyle}>
        <p style={eyebrowStyle}>Group Performance Training</p>
        <h1 style={titleStyle}>School Year Class Schedule</h1>
        <p style={subtitleStyle}>
          Sunday group classes for middle school and high school athletes.{" "}
          {SCHOOL_YEAR_FLYER.startLabel} {SCHOOL_YEAR_FLYER.endLabel}. Times are
          shown in Pacific Time. Classes are held at{" "}
          {SCHOOL_YEAR_FLYER.venueName}, {SCHOOL_YEAR_FLYER.venueAddress}.{" "}
          {SCHOOL_YEAR_FLYER.tryFirstNote} Parents must complete the waiver
          before their athlete can train.
        </p>

        <div style={{ ...ctaRowStyle, marginTop: 18 }}>
          <CallToAction href="/schedule#book-sessions" variant="primary">
            Book a session
          </CallToAction>
          {SCHOOL_YEAR_SESSIONS.flatMap((session) =>
            getDropInCtas(session).map((action) => (
              <CallToAction
                key={action.href}
                href={action.href}
                variant={action.variant}
              >
                {action.label}
              </CallToAction>
            ))
          )}
          <CallToAction href="#how-to-join" variant="secondary">
            See monthly plans
          </CallToAction>
          <CallToAction href="/waiver" variant="waiver">
            Sign waiver and register
          </CallToAction>
        </div>
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
              <div style={weeklyCtaStyle}>
                {getSessionCtas(session).map((action) => (
                  <CallToAction
                    key={action.href}
                    href={action.href}
                    variant={action.variant}
                  >
                    {action.label}
                  </CallToAction>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="group-schedule-panel" style={panelStyle}>
        <h2 style={sectionTitleStyle}>Choose how to start</h2>
        <ClassPaymentOptions />
      </section>

      <SeptemberDropInDates />

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
          {PROGRAM_NOTES.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <div className="group-schedule-cta-row" style={ctaRowStyle}>
        <CallToAction href="/schedule#book-sessions" variant="primary">
          Book a session
        </CallToAction>
        <CallToAction href="#how-to-join" variant="secondary">
          Choose drop-in or monthly
        </CallToAction>
        <CallToAction href="/waiver" variant="waiver">
          Sign waiver and register
        </CallToAction>
        <CallToAction href="/services/youth-performance-training" variant="secondary">
          Back to Group Performance Training
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

const weeklyCtaStyle: React.CSSProperties = {
  marginTop: 14,
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  justifyContent: "center",
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

const dropInIntroStyle: React.CSSProperties = {
  margin: "0 auto 16px",
  maxWidth: 720,
  lineHeight: 1.7,
  color: "var(--navy)",
  opacity: 0.88,
  textAlign: "center",
};

const dropInDateCardStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 16,
  background: "var(--panel2)",
};

const dropInDateTitleStyle: React.CSSProperties = {
  margin: "0 0 12px",
  fontSize: 16,
  fontWeight: 800,
  color: "var(--navy)",
};

const dropInSessionRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 12,
  flexWrap: "wrap",
  padding: "10px 0",
  borderTop: "1px solid var(--border)",
};
