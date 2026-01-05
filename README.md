<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.6`
* __Run:__ Mon Jan 05 2026 01:45:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 46748.8    | 20.90        | 8.34          |
| rayo                     | 1.4.6    | ✓      | 46507.2    | 21.00        | 8.29          |
| bare                     | v20.19.6 | ✗      | 46383.2    | 21.06        | 8.27          |
| fastify                  | 4.29.1   | ✓      | 45682.4    | 21.39        | 8.19          |
| kita                     | 1.1.36   | ✓      | 45147.2    | 21.65        | 8.09          |
| connect                  | 3.7.0    | ✗      | 45056.8    | 21.70        | 8.04          |
| server-base-router       | 7.1.32   | ✓      | 44948.8    | 21.74        | 8.02          |
| polkadot                 | 1.0.0    | ✗      | 44224.0    | 22.11        | 7.89          |
| server-base              | 7.1.32   | ✗      | 44017.6    | 22.22        | 7.85          |
| 0http                    | 3.5.3    | ✓      | 42826.4    | 22.86        | 7.64          |
| connect-router           | 1.3.8    | ✓      | 42722.4    | 22.91        | 7.62          |
| h3                       | 1.15.4   | ✗      | 42391.2    | 23.09        | 7.56          |
| h3-router                | 1.15.4   | ✓      | 41808.0    | 23.42        | 7.46          |
| restana                  | 4.9.9    | ✓      | 37707.2    | 26.02        | 6.72          |
| koa                      | 2.16.3   | ✗      | 36781.8    | 26.69        | 6.56          |
| hono                     | 4.11.3   | ✓      | 36378.6    | 26.99        | 5.97          |
| take-five                | 2.0.0    | ✓      | 34588.2    | 28.40        | 12.43         |
| restify                  | 11.1.0   | ✓      | 34174.2    | 28.76        | 6.16          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34085.4    | 28.84        | 6.08          |
| koa-router               | 12.0.1   | ✓      | 33383.6    | 29.45        | 5.95          |
| hapi                     | 21.4.4   | ✓      | 31199.8    | 31.54        | 5.56          |
| fastify-big-json         | 4.29.1   | ✓      | 11820.8    | 84.03        | 136.01        |
| express                  | 4.22.1   | ✓      | 10626.0    | 93.52        | 1.89          |
| express-with-middlewares | 4.22.1   | ✓      | 10034.4    | 99.06        | 3.73          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
