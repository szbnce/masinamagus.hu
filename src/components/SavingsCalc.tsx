/**
 * Megtérülés-kalkulátor — React-sziget (client:load).
 * Minden UI-szöveg az l10n rétegből (calc.* kulcsok), AGENTS.md.
 * A becslés a tapasztalati 5–15% közötti fogyasztáscsökkentésen alapul.
 */
import { useMemo, useState } from 'react';
import { t } from '../lib/l10n';

interface NumberFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix: string;
  min: number;
  max: number;
  step: number;
}

function NumberField({ id, label, value, onChange, suffix, min, max, step }: NumberFieldProps) {
  return (
    <div className="calc__field">
      <label htmlFor={id}>{label}</label>
      <div className="calc__input-wrap">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="calc__suffix mono" aria-hidden="true">
          {suffix}
        </span>
      </div>
    </div>
  );
}

const huNumber = new Intl.NumberFormat('hu-HU', { maximumFractionDigits: 0 });

export default function SavingsCalc() {
  const [consumption, setConsumption] = useState('7');
  const [km, setKm] = useState('15000');
  const [fuel, setFuel] = useState('650');

  const result = useMemo(() => {
    const c = Number(consumption.replace(',', '.'));
    const k = Number(km.replace(',', '.'));
    const f = Number(fuel.replace(',', '.'));
    if (!Number.isFinite(c) || !Number.isFinite(k) || !Number.isFinite(f)) return null;
    if (c <= 0 || k <= 0 || f <= 0) return null;
    const annualCost = (k / 100) * c * f;
    return { low: annualCost * 0.05, high: annualCost * 0.15 };
  }, [consumption, km, fuel]);

  return (
    <div className="calc">
      <div className="calc__fields">
        <NumberField
          id="calc-consumption"
          label={t('calc.consumption_label')}
          value={consumption}
          onChange={setConsumption}
          suffix="l/100 km"
          min={1}
          max={40}
          step={0.1}
        />
        <NumberField
          id="calc-km"
          label={t('calc.km_label')}
          value={km}
          onChange={setKm}
          suffix="km"
          min={0}
          max={200000}
          step={1000}
        />
        <NumberField
          id="calc-fuel"
          label={t('calc.fuel_label')}
          value={fuel}
          onChange={setFuel}
          suffix="Ft/l"
          min={1}
          max={5000}
          step={10}
        />
      </div>

      <div className="calc__result" role="status" aria-live="polite">
        <p className="calc__result-label">{t('calc.result_label')}</p>
        {result === null ? (
          <p className="calc__result-none">{t('calc.result_none')}</p>
        ) : (
          <p className="calc__result-value mono">
            <span className="calc__range">
              {huNumber.format(Math.round(result.low))} – {huNumber.format(Math.round(result.high))} Ft
            </span>
          </p>
        )}
        <p className="calc__tags mono">
          <span className="calc__tag">{t('calc.low_tag')}</span>
          <span className="calc__tag">{t('calc.high_tag')}</span>
        </p>
      </div>

      <p className="calc__note">{t('calc.note')}</p>
      <a className="btn btn--primary" href="/kapcsolat">
        {t('calc.cta')}
      </a>
    </div>
  );
}
