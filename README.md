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
* __Node:__ `v20.20.2`
* __Run:__ Mon Jun 01 2026 03:22:34 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 47974.4    | 20.34        | 8.55          |
| kita                     | 1.1.36   | ✓      | 46800.8    | 20.86        | 8.39          |
| fastify                  | 4.29.1   | ✓      | 46584.0    | 20.96        | 8.35          |
| polka                    | 0.5.2    | ✓      | 46314.4    | 21.08        | 8.26          |
| server-base-router       | 7.1.32   | ✓      | 46085.6    | 21.21        | 8.22          |
| rayo                     | 1.4.6    | ✓      | 45704.0    | 21.38        | 8.15          |
| server-base              | 7.1.32   | ✗      | 45627.2    | 21.42        | 8.14          |
| connect                  | 3.7.0    | ✗      | 45329.8    | 21.56        | 8.08          |
| polkadot                 | 1.0.0    | ✗      | 44746.4    | 21.85        | 7.98          |
| 0http                    | 3.5.3    | ✓      | 43801.6    | 22.34        | 7.81          |
| connect-router           | 1.3.8    | ✓      | 42912.0    | 22.79        | 7.65          |
| h3                       | 1.15.11  | ✗      | 41434.4    | 23.63        | 7.39          |
| h3-router                | 1.15.11  | ✓      | 39740.8    | 24.67        | 7.09          |
| restana                  | 4.9.9    | ✓      | 39138.2    | 25.05        | 6.98          |
| koa                      | 2.16.4   | ✗      | 37752.6    | 25.99        | 6.73          |
| hono                     | 4.12.23  | ✓      | 36311.0    | 27.03        | 5.96          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35193.8    | 27.90        | 6.28          |
| take-five                | 2.0.0    | ✓      | 34879.4    | 28.16        | 12.54         |
| restify                  | 11.1.0   | ✓      | 34590.2    | 28.40        | 6.23          |
| koa-router               | 12.0.1   | ✓      | 33294.0    | 29.54        | 5.94          |
| hapi                     | 21.4.9   | ✓      | 32726.0    | 30.04        | 5.84          |
| fastify-big-json         | 4.29.1   | ✓      | 11836.6    | 83.90        | 136.18        |
| express                  | 4.22.2   | ✓      | 11175.2    | 88.91        | 1.99          |
| express-with-middlewares | 4.22.2   | ✓      | 10356.6    | 95.96        | 3.85          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
